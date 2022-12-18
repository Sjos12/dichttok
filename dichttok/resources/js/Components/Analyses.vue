<script setup>
import { Link } from "@inertiajs/inertia-vue3";
const props = defineProps({
    gedicht: Object,
});
const emits = defineEmits(["toggleModal"]);
</script>
<template>
    <div class="grid">
        <div
            @click.self="$emit('toggleModal')"
            class="bg-gray-800 rounded-md h-2 w-12 mx-auto mb-10 mt-2"
        ></div>
        <div class="flex justify-between">
            <h1 class="text-gray-200 text-xl font-medium">Analyses</h1>
            <Link :href="route('gedicht.analyze.index', props.gedicht.uuid)">
                <PrimaryButton>Analyse maken</PrimaryButton>
            </Link>
        </div>

        <template v-if="props.gedicht.analyses.length > 0">
            <Link
                :href="
                    $route('gedicht.analyze.detail', {
                        analysis: analyse.uuid,
                        gedicht: props.gedicht.uuid,
                    })
                "
                v-for="analyse of props.gedicht.analyses"
                :key="analyse.id"
                class="card flex justify-between w-full bg-gray-700"
            >
                {{ analyse.user.name }}
                <i class="fa fa-heart fa-md my-auto"></i>
            </Link>
        </template>
        <span class="m-auto" v-else> No analyses yet </span>
    </div>
</template>


