<script setup>
import { reactive, ref } from "@vue/reactivity";
import PrimaryButtonVue from "./PrimaryButton.vue";
import SecondaryButtonVue from "./SecondaryButton.vue";
const isRecording = ref(false);
const emit = defineEmits(["sound_file"]);
const audio = ref("");
let audioStream = {};
let mediaRecorder = null;
let chunks = [];
function startRecording() {
    if (!mediaRecorder) {
        getUserMedia();
    }
    initMediaRecorder();
}

function initMediaRecorder() {
    isRecording.value = true;

    mediaRecorder = new MediaRecorder(audioStream);
    mediaRecorder.onstop = () => mediaRecorderStopped();
    mediaRecorder.ondataavailable = (e) => {
        console.log("pushing chunk", e);
        chunks.push(e.data);
    };
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    console.log("recorder started");
}
function stopRecording() {
    isRecording.value = false;
    mediaRecorder.stop();

    console.log(mediaRecorder.state);
    console.log("recorder stopped");
}

function mediaRecorderStopped() {
    console.log(chunks);
    console.log("mediaRecorderStopped");
    const blob = new Blob(chunks, { type: "audio/mpeg3; codecs=opus" });
    chunks = [];
    const audioURL = window.URL.createObjectURL(blob);
    emit("sound_file", blob);

    audio.value = audioURL;
}
function getUserMedia() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        console.log("getUserMedia supported.");
        navigator.mediaDevices
            .getUserMedia(
                // constraints - only audio needed for this app
                {
                    audio: true,
                }
            )

            // Success callback
            .then((stream) => {
                audioStream = stream;
                initMediaRecorder();
            })

            // Error callback
            .catch((err) => {
                console.error(
                    `The following getUserMedia error occurred: ${err}`
                );
            });
    } else {
        console.log("getUserMedia not supported on your browser!");
    }
}
</script>

<template>
    <div class="flex flex-col gap-y-5">
        <audio controls :src="audio"></audio>
        <PrimaryButtonVue
            class="ml-auto w-full"
            @click="startRecording"
            v-if="!isRecording"
            >{{ audio ? "Opnieuw opnemen" : "Opnemen" }}</PrimaryButtonVue
        >

        <template class="ml-auto" v-if="isRecording">
            <SecondaryButtonVue
                class="flex justify-between"
                @click="stopRecording"
                >Stoppen
                <i
                    class="fa fa-circle text-red-500 duration-75 animate-pulse"
                ></i
            ></SecondaryButtonVue>
        </template>
    </div>
</template>