
<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import AuthenticatedLayoutVue from "@/Layouts/AuthenticatedLayout.vue";
import { isReactive, reactive, ref } from "@vue/reactivity";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Stijlmiddel from "@/Components/Stijlmiddel.vue";
import GedichtFragment from "@/Components/GedichtFragment.vue";
import { computed } from "@vue/runtime-core";
// import Header from '@/Components/'
const props = defineProps({
    auth: Object,
    gedicht: Object,
    stijlmiddelen: Object,
});

const activeHighlightObject = reactive({});

const highlightFragments = reactive([]);

const gedichtFragments = reactive([
    {
        type: "unedited",
        start: 0,
        end: props.gedicht.gedicht.length,
        value: props.gedicht.gedicht,
    },
]);

const gedichtref = ref(props.gedicht.gedicht);

const stijlmiddelPickerPosition = reactive({ x: null, y: null });
function getSelectedText(fragment) {
    // Reset
    Object.assign(activeHighlightObject, {
        start: 0,
        end: 0,
        type: "highlight",
        stijlmiddel: props.stijlmiddelen[0],
    });

    let selection = {};
    if (window.getSelection || document.getSelection) {
        selection = window.getSelection();
        activeHighlightObject.value = selection.toString();
    } else if (document.selection) {
        selection = document.selection;
        activeHighlightObject.value = selection.createRange().text;
    } else return; // To write the selected text into the textarea

    if (selection.anchorOffset < selection.focusOffset) {
        activeHighlightObject.start = fragment.start + selection.anchorOffset;
        activeHighlightObject.end = fragment.start + selection.focusOffset;
    } else {
        activeHighlightObject.start = fragment.start + selection.focusOffset;
        activeHighlightObject.end = fragment.start + selection.anchorOffset;
    }
    let oRange = selection.getRangeAt(0); //get the text range
    let oRect = oRange.getBoundingClientRect();

    stijlmiddelPickerPosition.x = oRect.x;
    stijlmiddelPickerPosition.y = oRect.y;

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
        // value: startOfGedicht,
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
        // value: endOfGedicht,
        type: "unedited",
    });
    console.log(gedichtFragments);
}

const isActive = (stijlmiddel) => {
    return stijlmiddel == activeHighlightObject.stijlmiddel;
};

function sortFragments() {
    gedichtFragments.sort((a, b) => {
        return a.start - b.start;
    });
}
</script>
<template>
    <AuthenticatedLayoutVue>
        {{ activeHighlightObject }}

        <div
            v-if="activeHighlightObject.start"
            class="
                card
                flex
                gap-3
                absolute
                shadow-lg
                overflow-x-auto
                bg-gray-800
                p-2
            "
            :style="{
                top: stijlmiddelPickerPosition.y - 80 + 'px',
                left: stijlmiddelPickerPosition.x + 'px',
            }"
        >
            <button
                v-for="stijlmiddel of stijlmiddelen"
                :key="stijlmiddel.id"
                :style="{ backgroundColor: stijlmiddel.color }"
                class="text-white shadow-md rounded-md p-2 duration-100"
                :class="
                    isActive(stijlmiddel)
                        ? 'border-b-2 border-b-white font-medium'
                        : ''
                "
                @click="activeHighlightObject.stijlmiddel = stijlmiddel"
            >
                {{ stijlmiddel.name }}
            </button>
        </div>
        <div class="card mx-auto">
            <p class="text-gray-100 mt-5 text-lg font-light leading-loose">
                <template v-for="(fragment, idx) of gedichtFragments">
                    <Stijlmiddel
                        @mouseup="getSelectedText(fragment)"
                        v-if="fragment.type == 'highlight'"
                        :content="
                            gedichtref.slice(fragment.start, fragment.end)
                        "
                        :ref="
                            (el) => {
                                fragment.element = el;
                            }
                        "
                        :stijlmiddel="fragment.stijlmiddel"
                        :key="idx"
                    />
                    <GedichtFragment
                        v-else
                        @mouseup="getSelectedText(fragment)"
                        :content="
                            gedichtref.slice(fragment.start, fragment.end)
                        "
                        :key="idx * 2"
                    />
                </template>
            </p>
            <!-- <p class="text-white">
                {{ props.gedicht.gedicht }}
            </p> -->

            <div class="flex">
                <PrimaryButton class="ml-auto">Opslaan</PrimaryButton>
            </div>
        </div>
    </AuthenticatedLayoutVue>
</template>