<script setup>
import AuthenticatedLayoutVue from "@/Layouts/AuthenticatedLayout.vue";
import InputLabel from "@/Components/InputLabel.vue";
const props = defineProps({
    stijlmiddel: Object,
    fragments: Array,
});
console.log(props.fragments);
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
                    {{ stijlmiddel.name }}
                </h1>
            </div>
        </template>

        <div class="md:max-w-6xl mx-auto py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-0">
                <div
                    v-for="fragment of props.fragments"
                    :key="fragment.id"
                    class="card flex flex-col gap-y-3"
                >
                    <InputLabel
                        >Uit het gedicht
                        {{ fragment.analyse.gedicht.titel }}</InputLabel
                    >
                    <h2 class="text-white">
                        {{
                            fragment.analyse.gedicht.gedicht.slice(
                                fragment.start,
                                fragment.end
                            )
                        }}
                    </h2>
                </div>
            </div>
        </div>
    </AuthenticatedLayoutVue>
</template>