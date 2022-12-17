<script setup>
import InputLabelVue from "@/Components/InputLabel.vue";
import { Inertia } from "@inertiajs/inertia";
import { computed, ref } from "@vue/runtime-core";
import { DateTime } from "luxon";
const props = defineProps({
    gedicht: Object,
});

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
function analyzeGedicht() {
    let url = route("gedicht.analyze.index", props.gedicht.uuid);
    Inertia.get(url);
}
function toggleModal() {
    console.log(modalOpen);
    modalOpen.value = !modalOpen.value;
}
function openAnalyse(analyse) {
    let url = route("gedicht.analyze.detail", {
        analysis: analyse.uuid,
        gedicht: props.gedicht.uuid,
    });
    console.log(url);
    Inertia.get(url);
}
</script>
<template>
    <div class="relative overflow-y-hidden mx-auto h-screen max-w-xl py-10">
        <div class="card h-full flex flex-col gap-y-5">
            <div class="flex w-full justify-between items-center">
                <InputLabelVue>
                    {{ props.gedicht.user.name }}
                </InputLabelVue>
                <InputLabelVue>
                    {{ createdAt }}
                </InputLabelVue>
            </div>
            <div class="flex h-full">
                <div class="flex flex-col gap-y-5">
                    <h1 class="text-gray-200 text-xl font-medium">
                        {{ props.gedicht.titel }}
                    </h1>
                    <p
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
                    <span class="mt-10 text-gray-300">
                        {{ "- " + props.gedicht.auteur }}
                    </span>
                </div>
                <div class="mt-auto text-white flex flex-col gap-y-10 my-10">
                    <button @click="sendLike">
                        <i class="fa fa-heart fa-2xl"></i>
                        {{ props.gedicht.likes.length }}
                    </button>

                    <button>
                        <i class="fa fa-comments fa-xl"></i>
                    </button>
                    <button @click="analyzeGedicht">
                        <i class="fa fa-magnifying-glass-chart fa-xl"></i>
                    </button>
                    <button @click="toggleModal">
                        <i class="fa fa-list fa-xl"></i>
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
                    right-0
                    w-full
                    drop-shadow-2xl
                    duration-150
                    ease-in-out
                "
                :class="modalOpen ? 'bottom-0 top-36' : ' -bottom-36 top-full'"
            >
                <div
                    @click="openAnalyse(analyse)"
                    v-for="analyse of props.gedicht.analyses"
                    :key="analyse.id"
                    class="card bg-gray-700"
                >
                    {{ analyse.user.name }}
                </div>
            </div>
        </div>
    </div>
</template>
