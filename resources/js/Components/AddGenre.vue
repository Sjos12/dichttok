<script setup>
import InputLabel from "@/Components/InputLabel.vue";
import { reactive } from "@vue/reactivity";
import Dropdown from "./Dropdown.vue";
const props = defineProps({
    genres: Array,
});

const emit = defineEmits(["genre_select"]);
const activeGenre = reactive(props.genres[0]);
function selectGenre(genre) {
    Object.assign(activeGenre, genre);
    emit("genre_select", genre);
}
</script>
<template>
    <div class="grid gap-y-3">
        <InputLabel>Voeg een genre toe aan je gedicht.</InputLabel>
        <div class="w-full">
            <Dropdown align="right" width="96">
                <template #trigger>
                    <span class="inline-flex w-full rounded-md">
                        <button
                            type="button"
                            class="
                                transition
                                ease-in-out
                                duration-150
                                text-white
                                flex
                                justify-between
                                items-center
                                form-control
                                w-full
                                p-3
                            "
                        >
                            <div
                                class="
                                    rounded-full
                                    justify-center
                                    items-center
                                    px-4
                                    py-1
                                    flex
                                    gap-3
                                    color-white
                                "
                                :style="{ backgroundColor: activeGenre.color }"
                            >
                                <h2 class="text-white">
                                    {{ activeGenre.name }}
                                </h2>
                            </div>

                            <svg
                                class="ml-2 -mr-0.5 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                    </span>
                </template>

                <template #content>
                    <div class="grid p-4 gap-5 w-full grid-cols-3">
                        <Link
                            v-for="genre of props.genres"
                            :key="genre.uuid"
                            @click="selectGenre(genre)"
                            class="
                                rounded-full
                                justify-center
                                items-center
                                px-4
                                py-1
                                flex
                                gap-3
                                color-white
                            "
                            :style="{ backgroundColor: genre.color }"
                        >
                            <!-- <span
                                class="p-2 rounded-full h-full w-2"
                                :style="{ backgroundColor: genre.color }"
                            >
                            </span> -->
                            <h2 class="text-white">
                                {{ genre.name }}
                            </h2>
                        </Link>
                    </div>
                </template>
            </Dropdown>
        </div>
    </div>
</template>