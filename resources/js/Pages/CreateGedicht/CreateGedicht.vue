<script setup>
import AuthenticatedLayoutVue from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButtonVue from "@/Components/PrimaryButton.vue";
import InputLabelVue from "@/Components/InputLabel.vue";
import TextInputVue from "@/Components/TextInput.vue";
import InputErrorVue from "@/Components/InputError.vue";
import CheckboxVue from "@/Components/Checkbox.vue";
import SecondaryButtonVue from "@/Components/SecondaryButton.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { Inertia } from "@inertiajs/inertia";
import GedichtRecorder from "@/Components/GedichtRecorder.vue";
import AddGenreVue from "@/Components/AddGenre.vue";
import GedichtBasicDetailsVue from "./GedichtBasicDetails.vue";
import GedichtRecordingVue from "./GedichtRecording.vue";
import GedichtContextVue from "./GedichtContext.vue";
import { computed } from "@vue/runtime-core";
const props = defineProps({
    auth: Object,
    genres: Array,
});
const gedichtForm = reactive({
    titel: "",
    gedicht: "",
    zelfGeschreven: false,
    auteur: "",
    context: "",
});

const activeStep = ref(1);
const totalSteps = ref(3);
let stepPercentage = computed(() => {
    console.log(activeStep.value, totalSteps.value);
    return ((activeStep.value - 1) / totalSteps.value) * 100;
});
const authorChosen = reactive(false);
function gedichtMaken() {
    let url = route("gedicht.create");
    Inertia.post(url, gedichtForm);
}

function gedichtDoorIemandAnders() {
    gedichtForm.zelfGeschreven = false;
}
function gedichtDoorMijzelf() {
    gedichtForm.zelfGeschreven = true;
    gedichtForm.auteur = props.auth.user.name;
}
</script>
<template>
    <AuthenticatedLayoutVue>
        <template class="flex" #header>
            <div class="flex justify-between items-center">
                <h2
                    class="
                        font-semibold
                        text-xl text-gray-800
                        dark:text-gray-200
                        leading-tight
                    "
                >
                    Gedicht uploaden
                </h2>
            </div>
        </template>
        <div class="card mx-auto">
            <div class="mb-5 shadow-md flex bg-gray-900 rounded-full h-5 p-0">
                <span
                    class="
                        rounded-full
                        top-0
                        m-1
                        left-0
                        bg-indigo-600
                        duration-200
                        ease-in-out
                    "
                    :style="{
                        width: stepPercentage ? stepPercentage + '%' : '4%',
                    }"
                >
                    &nbsp;
                </span>
            </div>
            <GedichtBasicDetailsVue
                v-if="activeStep == 1"
                v-model:titel="gedichtForm.titel"
                v-model:gedicht="gedichtForm.gedicht"
            />
            <GedichtContextVue
                v-else-if="activeStep == 2"
                :genres="props.genres"
                v-model:genre="gedichtForm.genre"
                v-model:auteur="gedichtForm.auteur"
                v-model:context="gedichtForm.context"
            />

            <GedichtRecordingVue
                v-else-if="activeStep == 3"
                v-model:recording="gedichtForm.recording"
            />
        </div>
        <div class="card gap-y-5 mx-auto flex flex-col justify-center">
            <PrimaryButtonVue
                v-if="activeStep == totalSteps"
                class="mx-auto"
                type="button"
                @click="gedichtMaken"
                >Gedicht opslaan</PrimaryButtonVue
            >
            <PrimaryButtonVue @click="activeStep++" v-else>
                Next
            </PrimaryButtonVue>
        </div>
    </AuthenticatedLayoutVue>
</template>