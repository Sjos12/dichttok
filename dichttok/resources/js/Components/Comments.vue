<script setup>
import InputLabel from "./InputLabel.vue";
import PrimaryButton from "./PrimaryButton.vue";
const props = defineEmits(["toggleModal"]);
</script>
<template>
    <div class="grid gap-y-5">
        <div
            @click.self="$emit('toggleModal')"
            class="bg-gray-800 rounded-md h-2 w-12 mx-auto mb-10 mt-2"
        ></div>
        <div class="flex justify-between">
            <h1 class="text-gray-200 text-xl font-medium">Comments</h1>
        </div>
        <div class="flex flex-col gap-y-3">
            <!-- <InputLabel>Reager op dit gedicht.</InputLabel> -->
            <textarea class="form-control"></textarea>
            <PrimaryButton class="ml-auto">Reageren</PrimaryButton>
        </div>
        <span class="m-auto"> No comments yet </span>
    </div>
</template>