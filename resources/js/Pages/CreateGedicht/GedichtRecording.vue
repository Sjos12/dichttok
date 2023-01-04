<script setup>
import GedichtRecorderVue from "@/Components/GedichtRecorder.vue";
import PrimaryButtonVue from "@/Components/PrimaryButton.vue";
import SecondaryButtonVue from "@/Components/SecondaryButton.vue";
import { ref } from "@vue/reactivity";
defineProps({ recording: File });

defineEmits(["update:recording"]);
function saveVoiceoverBlob(blob) {
    var file = new File([blob], "voiceover.mp3");
    $emit("update:recording", file);
}
const addRecording = ref(false);
const selectedOption = ref(false);
</script>
<template>
    <div v-if="!addRecording && !selectedOption" class="h-full w-full grid">
        <h2
            class="
                font-semibold
                text-lg text-gray-800
                dark:text-gray-200
                leading-tight
            "
        >
            Wil je een voiceover van dit gedocht opnemen?
        </h2>
        <div class="flex gap-5">
            <SecondaryButtonVue @click="">Nee</SecondaryButtonVue
            ><PrimaryButtonVue
                @click="(() => addRecording, selectedOption == true)"
                >Ja</PrimaryButtonVue
            >
        </div>
    </div>
    <GedichtRecorderVue v-if="addRecording" @sound_file="saveVoiceoverBlob" />
</template>
