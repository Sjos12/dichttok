<script setup>
import Dropdown from "./Dropdown.vue";
import { Link } from "@inertiajs/inertia-vue3";
const props = defineProps({
    genres: Array,
});
</script>
<template>
    <div class="w-full">
        <Dropdown align="right" width="96">
            <template #trigger>
                <span class="inline-flex rounded-md">
                    <button
                        type="button"
                        class="
                            inline-flex
                            items-center
                            px-3
                            py-2
                            border border-transparent
                            text-sm
                            leading-4
                            font-medium
                            rounded-md
                            text-gray-500
                            bg-white
                            dark:bg-gray-800
                            hover:text-gray-700
                            dark:hover:text-gray-300
                            focus:outline-none
                            transition
                            ease-in-out
                            duration-150
                        "
                    >
                        Genres

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
                        :href="route('dashboard.filter', genre.uuid)"
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
</template>