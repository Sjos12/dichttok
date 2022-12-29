<script setup>
import InputLabelVue from "@/Components/InputLabel.vue";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-vue3";
import { computed, onMounted, reactive, ref } from "@vue/runtime-core";
import { DateTime } from "luxon";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import Comments from "@/Components/Comments.vue";
import Analyses from "@/Components/Analyses.vue";
import ViewGedichtAnalyse from "./ViewGedichtAnalyse.vue";
import GedichtReader from "@/Components/AddTags.vue";
const props = defineProps({
    gedicht: Object,
});

const activeAnalyse = reactive({});
const analyseIsOpen = ref(false);
let createdAt = computed(() => {
    return DateTime.fromISO(props.gedicht.created_at).toRelative();
});
const gedichtElement = ref(null);
function sendLike() {
    let url = route("gedicht.like", props.gedicht.uuid);
    Inertia.post(
        url,
        {},
        {
            preserveState: true,
            preserveScroll: true,
        }
    );
}

let modalOpen = ref(false);
let modalState = ref("comments");
const likedGedicht = computed(() => {
    return props.gedicht.is_liked;
});
const gedicht = ref(props.gedicht.gedicht);
const shouldPlayAudio = ref(false);
let audio = reactive(new Audio(props.gedicht.voiceover));
audio.loop = true;

onMounted(() => {
    if (!gedichtElement || !props.gedicht.voiceover) return false;
    let observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) playAudio();
            else {
                stopPlayingAudio();
            }
        },
        {
            threshold: 0.7,
        }
    );

    observer.observe(gedichtElement.value);
});

function playAudio() {
    shouldPlayAudio.value = true;
    console.log("play audio", props.gedicht.titel);
    audio.play();
}
function stopPlayingAudio() {
    if (!audio) return;
    shouldPlayAudio.value = false;
    console.log("stop audio", props.gedicht.titel);
    audio.pause();
    audio.currentTime = 0;
}
function analyzeGedicht() {
    let url = route("gedicht.analyze.index", props.gedicht.uuid);
    Inertia.get(url);
}
function toggleModal() {
    console.log(modalOpen);
    modalOpen.value = !modalOpen.value;
}
function openComments() {
    modalState.value = "comments";
    toggleModal();
}
function openAnalyses() {
    modalState.value = "analyses";
    toggleModal();
}
function chooseAnalyse(analyse) {
    analyseIsOpen.value = true;
    Object.assign(activeAnalyse, analyse);
    toggleModal();
}
</script>
<template>
    <div ref="gedichtElement" class="relative mx-auto h-screen max-w-xl">
        <div class="card h-full flex w-full flex-col gap-y-5">
            <div class="flex w-full justify-between items-center">
                <InputLabelVue>
                    {{ props.gedicht.user.name }}
                </InputLabelVue>
                <InputLabelVue>
                    {{ createdAt }}
                </InputLabelVue>
            </div>
            <div class="flex h-full gap-3">
                <div class="flex flex-col gap-y-5 w-full overflow-x-auto">
                    <h1 class="text-gray-200 text-xl font-medium">
                        {{ props.gedicht.titel }}
                    </h1>

                    <p
                        v-if="!analyseIsOpen"
                        class="
                            whitespace-pre-wrap
                            text-gray-100
                            mt-5
                            text-lg
                            font-light
                            leading-loose
                        "
                    >
                        {{ gedicht }}
                    </p>
                    <template v-if="analyseIsOpen && activeAnalyse">
                        <ViewGedichtAnalyse
                            :gedicht="props.gedicht"
                            :analysis="activeAnalyse"
                        />
                    </template>
                    <span class="mt-10 text-gray-300">
                        {{ "- " + props.gedicht.auteur }}
                    </span>
                    <GedichtReader class="mt-auto" />
                </div>
                <div
                    class="
                        text-white
                        flex flex-col
                        gap-y-5
                        mt-auto
                        my-10
                        grow-0
                        shrink
                    "
                >
                    <button class="flex flex-col gap-y-5" @click="sendLike">
                        <i
                            :class="likedGedicht ? 'text-red-500' : ''"
                            class="fa fa-heart fa-2xl"
                        ></i>
                        <span>
                            {{ props.gedicht.likes.length }}
                        </span>
                    </button>

                    <button
                        class="flex py-5 flex-col gap-y-5"
                        @click="openComments"
                    >
                        <i class="fa fa-comments fa-xl"></i>
                        <!-- <span>{{ 1 }}</span> -->
                    </button>

                    <button
                        class="flex py-5 flex-col gap-y-5"
                        @click="openAnalyses"
                    >
                        <i class="fa fa-magnifying-glass-chart fa-xl"></i>

                        <!-- <span>{{ props.gedicht.analyses.length }}</span> -->
                    </button>
                </div>
            </div>
            <div class="flex w-full">
                <button v-if="props.gedicht.voiceover">
                    <i
                        class="fa fa-xl text-white"
                        :class="shouldPlayAudio ? 'fa-pause' : 'fa-play'"
                    ></i>
                </button>
                <button v-else>
                    <i class="fa-solid fa-xl fa-volume-xmark text-white"></i>
                </button>
            </div>
            <div
                @click.self="toggleModal"
                class="
                    card
                    text-white
                    absolute
                    bg-gray-900
                    left-0
                    overflow-y-auto
                    right-0
                    w-full
                    duration-150
                    ease-in-out
                "
                :class="modalOpen ? 'bottom-0 top-36' : ' -bottom-36 top-full'"
            >
                <Analyses
                    v-if="modalState == 'analyses'"
                    @toggle-modal="toggleModal()"
                    @choose-analyse="chooseAnalyse"
                    :gedicht="props.gedicht"
                />
                <template v-else>
                    <Comments
                        @toggle-modal="toggleModal()"
                        :gedicht="props.comments"
                /></template>
            </div>
        </div>
    </div>
</template>
