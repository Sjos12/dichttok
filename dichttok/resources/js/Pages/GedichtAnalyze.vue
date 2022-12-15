
<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import AuthenticatedLayoutVue from "@/Layouts/AuthenticatedLayout.vue";
import { isReactive, reactive, ref } from "@vue/reactivity";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Stijlmiddel from "@/Components/Stijlmiddel.vue";
import GedichtFragment from "@/Components/GedichtFragment.vue";

const props = defineProps({
    auth: Object,
    gedicht: Object,
    stijlmiddelen: Object,
});

const activeHighlightObject = reactive({
    start: 0,
    end: 0,
    value: "",
    stijlmiddel: {},
    type: "",
});

const highlightFragments = reactive([]);

const gedichtFragments = reactive([
    { type: "unedited", value: props.gedicht.gedicht },
]);

const gedichtref = ref(props.gedicht.gedicht);

function getSelectedText() {
    // Reset
    Object.assign(activeHighlightObject, {
        start: 0,
        end: 0,
        value: "",
        type: "highlight",
    });

    let selection = {};
    if (window.getSelection || document.getSelection) {
        selection = window.getSelection();
        activeHighlightObject.value = selection.toString();
    } else if (document.selection) {
        selection = document.selection;
        activeHighlightObject.value = selection.createRange().text;
    } else return; // To write the selected text into the textarea

    console.log("selection", selection);

    if (selection.anchorOffset < selection.focusOffset) {
        activeHighlightObject.start = selection.anchorOffset;
        activeHighlightObject.end = selection.focusOffset;
    } else {
        activeHighlightObject.start = selection.focusOffset;
        activeHighlightObject.end = selection.anchorOffset;
    }
    highlightFragments.splice(0);
    highlightFragments.push(activeHighlightObject);
    splitUpGedicht();
    sortFragments();
}

function splitUpGedicht() {
    // Reset gedichtobject.
    gedichtFragments.splice(0);

    highlightFragments.forEach((fragment) => {
        gedichtFragments.push(fragment);
    });

    // Indiced must be sorted... [{start: x, end: y}, {start: a, end: a}]

    // uneditedIndices = [];
    let startOfGedicht = gedichtref.value.slice(0, highlightFragments[0].start);
    let lastIndice = highlightFragments[highlightFragments.length - 1];
    let endOfGedicht = gedichtref.value.slice(
        lastIndice.end,
        gedichtref.length
    );

    // unedited fragment
    gedichtFragments.splice(0, 0, {
        start: 0,
        end: highlightFragments[0].start,
        value: startOfGedicht,
        type: "unedited",
    });

    for (let i = 0; i < highlightFragments.length; i++) {
        let indice = highlightFragments[i];
        let nextIndice = highlightFragments[i + 1];
        if (!indice || !nextIndice) continue;
        gedichtFragments.splice(i, 0, {
            start: indice.end,
            end: nextIndice.start,
        });
    }
    gedichtFragments.splice(gedichtFragments.length - 1, 0, {
        start: lastIndice.end,
        end: gedichtref.value.length,
        value: endOfGedicht,
        type: "unedited",
    });
    console.log(gedichtFragments);
}

function sortFragments() {
    gedichtFragments.sort((a, b) => {
        return a.start - b.start;
    });
}
</script>
<template>
    <AuthenticatedLayoutVue>
        <div @mouseup="getSelectedText" class="card mx-auto">
            <p class="text-gray-100 mt-5 text-lg font-light leading-loose">
                <span v-for="fragment of gedichtFragments" :key="fragment.key">
                    <Stijlmiddel
                        v-if="fragment.type == 'highlight'"
                        :content="fragment.value"
                        :stijlmiddel="fragment.stijlmiddel"
                    />
                    <GedichtFragment v-else :content="fragment.value" />
                </span>
            </p>

            <div class="flex"></div>
            <button
                v-for="stijlmiddel of stijlmiddelen"
                :key="stijlmiddel.id"
                :class="stijlmiddel.color"
                @click="activeHighlightObject.stijlmiddel = stijlmiddel"
            >
                {{ stijlmiddel.name }}
            </button>
        </div>
    </AuthenticatedLayoutVue>
</template>