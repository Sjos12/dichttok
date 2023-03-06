<script setup>
import GedichtRecorderVue from "@/Components/GedichtRecorder.vue";
import PrimaryButtonVue from "@/Components/PrimaryButton.vue";
import SecondaryButtonVue from "@/Components/SecondaryButton.vue";
import { ref } from "@vue/reactivity";
defineProps({ voiceover: File });

const emit = defineEmits(["update:voiceover", "nextStep", "prevStep"]);
function saveVoiceover(file) {
    emit("update:voiceover", file);
    recordingIsMade.value = true;
}
const addRecording = ref(false);
const selectedOption = ref(false);
const recordingIsMade = ref(false);
</script>
<template>
    <div v-if="!addRecording && !selectedOption" class="h-full w-full grid">
        <h2
            class="
                font-semibold
                text-lg text-gray-800
                dark:text-gray-200
                leading-tight
                text-center
                my-20
            "
        >
            Wil je een spoken word clip bij dit gedicht uploaden?
        </h2>
        <div class="flex justify-center gap-5">
            <SecondaryButtonVue @click="$emit('nextStep')"
                >Skip</SecondaryButtonVue
            ><PrimaryButtonVue
                @click="
                    () => {
                        addRecording = true;
                        selectedOption = true;
                    }
                "
                >Ja</PrimaryButtonVue
            >
        </div>
    </div>
    <GedichtRecorderVue v-if="addRecording" @sound_file="saveVoiceover" />
    <div class="stepped-form-buttons" v-if="addRecording && recordingIsMade">
        <SecondaryButtonVue @click="$emit('prevStep')">Back</SecondaryButtonVue>
        <PrimaryButtonVue @click="$emit('nextStep')">Next</PrimaryButtonVue>
    </div>
</template>
