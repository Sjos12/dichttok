<script setup>
import AuthenticatedLayoutVue from "@/Layouts/AuthenticatedLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import SecondaryButton from "@/Components/SecondaryButton.vue";
const props = defineProps({
    genres: Array,
});
</script>
<template>
    <AuthenticatedLayoutVue>
        <template class="flex" #header>
            <div class="flex justify-between items-center">
                <h1
                    class="
                        font-semibold
                        text-xl text-gray-800
                        dark:text-gray-200
                        leading-tight
                    "
                >
                    Genres
                </h1>
            </div>
        </template>

        <div class="md:max-w-6xl mx-auto py-12">
    
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-0">
                <Link
                    v-for="genre of genres"
                    :key="genre.uuid"
                    :href="route('dashboard.filter', genre.uuid)"
                    class="card flex gap-3"
                >
                    <span
                        class="p-2 rounded-full h-full w-2"
                        :style="{ backgroundColor: genre.color }"
                    >
                    </span>
                    <h2 class="text-white">
                        {{ genre.name }}
                    </h2>
                </Link>
            </div>
        </div>
    </AuthenticatedLayoutVue>
</template>