<script setup>
import AuthenticatedLayoutVue from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryButtonVue from "@/Components/PrimaryButton.vue";
import InputLabelVue from "@/Components/InputLabel.vue";
import TextInputVue from "@/Components/TextInput.vue";
import InputErrorVue from "@/Components/InputError.vue";
import CheckboxVue from "@/Components/Checkbox.vue";
import SecondaryButtonVue from "@/Components/SecondaryButton.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { reactive } from "@vue/reactivity";
import { Inertia } from "@inertiajs/inertia";

const props = defineProps({
    auth: Object,
});
const gedichtForm = reactive({
    titel: "",
    gedicht: "",
    zelfGeschreven: false,
    auteur: "",
    context: "",
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

        <div class="card gap-y-5 mx-auto flex flex-col justify-center">
            <div class="grid gap-y-3">
                <InputLabelVue>Titel van je gedicht*</InputLabelVue>
                <input
                    spellcheck="false"
                    v-model="gedichtForm.titel"
                    class="form-control"
                    type="text"
                />
            </div>
            <div class="grid gap-y-3">
                <InputLabelVue>Jouw gedicht*</InputLabelVue>
                <textarea
                    spellcheck="false"
                    v-model="gedichtForm.gedicht"
                    class="form-control h-64"
                ></textarea>
                <span class="ml-auto text-gray-300 font-thin text-sm">
                    {{ gedichtForm.gedicht.length + " / 500" }} characters
                </span>
            </div>
            <div class="grid gap-y-3">
                <InputLabelVue
                    >Door wie is je gedicht geschreven?*</InputLabelVue
                >
                <!-- <div v-if="authorChosen" class="flex">
                    <SecondaryButtonVue
                        v-if="gedichtForm.zelfGeschreven && authorChosen"
                        @click="gedichtDoorMijzelf"
                        >Mijzelf</SecondaryButtonVue
                    >
                    <span
                        class="text-white my-auto mx-5"
                        v-if="!gedichtForm.zelfGeschreven"
                        >of</span
                    >
                    <SecondaryButtonVue
                        v-if="!gedichtForm.zelfGeschreven"
                        @click="gedichtDoorIemandAnders"
                        >Iemand anders</SecondaryButtonVue
                    >
                </div> -->
                <input
                    v-model="gedichtForm.auteur"
                    class="form-control w-full"
                    type="text"
                    spellcheck="false"
                    placeholder="John doe..."
                />
            </div>
            <div class="grid gap-y-3">
                <InputLabelVue>Context bij jou gedicht</InputLabelVue>
                <textarea
                    v-model="gedichtForm.context"
                    class="form-control"
                ></textarea>
            </div>

            <PrimaryButtonVue
                class="mx-auto"
                type="button"
                @click="gedichtMaken"
                >Gedicht opslaan</PrimaryButtonVue
            >
        </div>
    </AuthenticatedLayoutVue>
</template>