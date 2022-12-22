<script setup>
import AuthenticatedLayoutVue from "@/Layouts/AuthenticatedLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import SecondaryButton from "@/Components/SecondaryButton.vue";
const props = defineProps({
    stijlmiddelen: Array,
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
                    Stijlmiddelen
                </h1>
                <div class="flex place-items-center gap-5">
                    <input
                        placeholder="Zoek een stijlmiddel"
                        type="text"
                        class="form-control"
                    />
                    <SecondaryButton>Zoeken</SecondaryButton>
                </div>
            </div>
        </template>

        <div class="md:max-w-6xl mx-auto py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-0">
                <Link
                    v-for="stijlmiddel of stijlmiddelen"
                    :key="stijlmiddel.uuid"
                    :href="route('stijlmiddel.detail', stijlmiddel.uuid)"
                    class="card"
                >
                    <h2 class="text-white">
                        {{ stijlmiddel.name }}
                    </h2>
                </Link>
            </div>
        </div>
    </AuthenticatedLayoutVue>
</template>