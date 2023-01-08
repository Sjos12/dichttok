<script setup>
import InputLabelVue from "@/Components/InputLabel.vue";
import PrimaryButtonVue from "@/Components/PrimaryButton.vue";
defineProps({
    titel: String,
    gedicht: String,
});
defineEmits(["update:titel", "update:gedicht", "nextStep"]);
function addLineBreak() {
    $emit("update:gedicht", (gedicht += "<br>"));
}
</script>
<template>
    <div class="grid gap-y-5">
        <div class="grid gap-y-3">
            <InputLabelVue>Titel van je gedicht*</InputLabelVue>
            <input
                spellcheck="false"
                :value="titel"
                @input="$emit('update:titel', $event.target.value)"
                class="form-control text-gray-200 text-xl font-medium"
                type="text"
            />
        </div>
        <div class="grid gap-y-3">
            <InputLabelVue>Jouw gedicht*</InputLabelVue>

            <textarea
                spellcheck="false"
                :value="gedicht"
                @input="$emit('update:gedicht', $event.target.value)"
                @keydown.enter.prevent="addLineBreak"
                class="form-control h-64"
            ></textarea>
            <span class="ml-auto text-gray-300 font-thin text-sm">
                {{ gedicht.length + " / 1000" }} characters
            </span>
        </div>
    </div>
    <div class="stepped-form-buttons">
        <PrimaryButtonVue @click="$emit('nextStep')">Next</PrimaryButtonVue>
    </div>
</template>
