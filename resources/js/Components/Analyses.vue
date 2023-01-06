<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import SecondaryButton from "@/Components/SecondaryButton.vue";
const props = defineProps({
    gedicht: Object,
});
const emits = defineEmits(["toggleModal", "chooseAnalyse"]);
</script>
<template>
    <div class="grid">
        <!-- <div
            @click.self="$emit('toggleModal')"
            class="bg-gray-700 rounded-md h-2 w-12 mx-auto mb-10 mt-2"
        ></div> -->
        <div class="flex justify-between">
            <h1 class="text-gray-200 text-xl font-medium">Analyses</h1>
            <Link :href="$route('gedicht.analyze.index', props.gedicht.uuid)">
                Analyse maken
            </Link>
        </div>

        <template v-if="props.gedicht.analyses.length > 0">
            <button
                v-for="analyse of props.gedicht.analyses"
                :key="analyse.id"
                @click="$emit('chooseAnalyse', analyse)"
                class="card flex justify-between w-full bg-gray-700"
            >
                {{ analyse.user.name }}
            </button>
        </template>
        <span class="m-auto" v-else> No analyses yet </span>
    </div>
</template>


