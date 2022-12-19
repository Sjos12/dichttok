<script setup>
import InputLabelVue from "@/Components/InputLabel.vue";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-vue3";
import { computed, reactive, ref } from "@vue/runtime-core";
import { DateTime } from "luxon";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import Comments from "@/Components/Comments.vue";
import Analyses from "@/Components/Analyses.vue";
import ViewGedichtAnalyse from "./ViewGedichtAnalyse.vue";
import GedichtReader from "@/Components/GedichtReader.vue";
const props = defineProps({
    gedicht: Object,
});

const activeAnalyse = reactive({});
const analyseIsOpen = ref(false);
let createdAt = computed(() => {
    return DateTime.fromISO(props.gedicht.created_at).toRelative();
});

function sendLike() {
    let url = route("gedicht.like", props.gedicht.uuid);
    Inertia.post(
        url,
        {},
        {
            preserveState: false,
            preserveScroll: true,
        }
    );
}

let modalOpen = ref(false);
let modalState = ref("comments");
const likedGedicht = computed(() => {
    return props.gedicht.is_liked;
});
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
    <div
        class="relative overflow-y-hidden mx-auto h-full max-h-screen max-w-xl"
    >
        <div class="card h-full flex flex-col gap-y-5">
            <div class="flex w-full justify-between items-center">
                <InputLabelVue>
                    {{ props.gedicht.user.name }}
                </InputLabelVue>
                <InputLabelVue>
                    {{ createdAt }}
                </InputLabelVue>
            </div>
            <div class="flex h-full gap-3">
                <div class="flex flex-col gap-y-5">
                    <h1 class="text-gray-200 text-xl font-medium">
                        {{ props.gedicht.titel }}
                    </h1>
                    <p
                        v-if="!analyseIsOpen"
                        class="
                            text-gray-100
                            mt-5
                            text-lg
                            font-light
                            leading-loose
                        "
                    >
                        {{ props.gedicht.gedicht }}
                    </p>
                    <p v-if="analyseIsOpen && activeAnalyse">
                        <ViewGedichtAnalyse
                            :gedicht="props.gedicht"
                            :analysis="activeAnalyse"
                        />
                    </p>
                    <span class="mt-10 text-gray-300">
                        {{ "- " + props.gedicht.auteur }}
                    </span>
                    <GedichtReader class="mt-auto" />
                </div>
                <div
                    class="pt-20 mt-auto text-white flex flex-col gap-y-6 my-10"
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

                    <button class="flex flex-col gap-y-5" @click="openComments">
                        <i class="fa fa-comments fa-xl"></i>
                        <!-- <span>{{ 1 }}</span> -->
                    </button>

                    <button class="flex flex-col gap-y-5" @click="openAnalyses">
                        <i class="fa fa-magnifying-glass-chart fa-xl"></i>

                        <!-- <span>{{ props.gedicht.analyses.length }}</span> -->
                    </button>
                </div>
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
