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

const props = defineProps({
    gedicht: Object,
    nextUrl: String,
});

const activeAnalyse = reactive({});
const analyseIsOpen = ref(false);
let createdAt = computed(() => {
    return DateTime.fromISO(props.gedicht.created_at).toRelative();
});
let genre = computed(() => {
    return props.gedicht.tags[0];
});
const gedichtElement = ref(null);

let modalOpen = ref(false);
let modalState = ref("comments");
const likedGedicht = computed(() => {
    return props.gedicht.is_liked;
});

const gedicht = ref(props.gedicht.gedicht);
const shouldPlayAudio = ref(false);
let audio = reactive(new Audio(props.gedicht.voiceover));
console.log(props.gedicht.voiceover);
audio.loop = true;

onMounted(() => {
    if (props.nextUrl) {
        setupIntersectionObserver();
    }

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
    <div ref="gedichtElement" class="mx-auto h-[calc(100vh-6rem)] max-w-xl">
        <div
            class="
                card
                bg-transparent
                md:bg-gray-800
                mx-auto
                h-full
                gap-y-4
                flex
                w-full
                flex-col
            "
        >
            <div class="flex w-full justify-between items-center">
                <InputLabelVue class="font-normal">
                    {{ props.gedicht.user.name }}
                </InputLabelVue>
                <InputLabelVue class="font-light">
                    {{ createdAt }}
                </InputLabelVue>
            </div>
            <div class="flex h-full gap-3 max-h-full">
                <div class="flex flex-col gap-y- w-full overflow-y-auto">
                    <h1 class="text-gray-200 text-xl font-medium">
                        {{ props.gedicht.titel }}
                    </h1>

                    <p
                        v-if="!analyseIsOpen"
                        class="
                            overflow-y-auto
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
                            class="overflow-y-auto"
                            :gedicht="props.gedicht"
                            :analysis="activeAnalyse"
                        />
                    </template>
                    <div class="flex justify-between">
                        <span class="mt-5 text-gray-300">
                            {{ "- " + props.gedicht.auteur }}
                        </span>
                        <div
                            v-if="props.gedicht.tags[0]"
                            class="
                                rounded-full
                                justify-center
                                items-center
                                px-4
                                py-1
                                flex
                                gap-3
                                mt-auto
                                ml-auto
                                text-xs text-white
                            "
                            :style="{
                                backgroundColor: props.gedicht.tags[0].color,
                            }"
                        >
                            {{ props.gedicht.tags[0].name }}
                        </div>
                    </div>
                </div>
                <div
                    class="
                        max-h-full
                        text-white
                        flex flex-col
                        gap-y-5
                        mt-auto
                        grow-0
                        shrink
                    "
                >
                    <button
                        class="flex flex-col mt-5 gap-y-5"
                        @click="sendLike"
                    >
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
                    </button>

                    <button
                        class="flex py-5 flex-col gap-y-5"
                        @click="openAnalyses"
                    >
                        <i class="fa fa-magnifying-glass-chart fa-xl"></i>
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
                    bg-gray-800
                    md:bg-gray-900
                    rounded-t-lg
                    left-0
                    right-0
                    w-full
                    duration-150
                    ease-in-out
                "
                :class="modalOpen ? 'bottom-0 top-36' : ' -bottom-36 top-full'"
            >
                <div
                    @click.self="toggleModal()"
                    class="bg-transparent w-full pb-10 pt-2"
                >
                    <div
                        class="bg-gray-700 rounded-full h-2 w-12 mx-auto"
                    ></div>
                </div>
                <Analyses
                    v-if="modalState == 'analyses'"
                    @toggle-modal="toggleModal()"
                    @choose-analyse="chooseAnalyse"
                    :gedicht="props.gedicht"
                />

                <Comments
                    v-else
                    :gedicht="props.gedicht"
                    :comments="props.gedicht.comments"
                    @toggle-modal="toggleModal()"
                />
            </div>
        </div>
    </div>
</template>
