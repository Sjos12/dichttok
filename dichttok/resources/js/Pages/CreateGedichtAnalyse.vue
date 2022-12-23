
<script setup>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import AuthenticatedLayoutVue from "@/Layouts/AuthenticatedLayout.vue";
import { isReactive, reactive, ref } from "@vue/reactivity";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import Stijlmiddel from "@/Components/Stijlmiddel.vue";
import GedichtFragment from "@/Components/GedichtFragment.vue";
import { computed } from "@vue/runtime-core";
import { Inertia } from "@inertiajs/inertia";
// import Header from '@/Components/'
const props = defineProps({
    auth: Object,
    gedicht: Object,
    stijlmiddelen: Object,
});

let activeHighlightObject = reactive({});

const highlightFragments = reactive([]);

const gedichtFragments = reactive([
    {
        type: "unedited",
        start: 0,
        end: props.gedicht.gedicht.length,
    },
]);

const gedichtref = ref(props.gedicht.gedicht);

const stijlmiddelPickerPosition = reactive({ x: null, y: null });
function getSelectedText(fragment) {
    console.log(fragment.start);

    // Reset activehighlight object
    activeHighlightObject = reactive({
        start: 0,
        end: 0,
        type: "highlight",
        stijlmiddel: props.stijlmiddelen[0],
    });
    let selection = getSelection();

    if (selection.anchorOffset < selection.focusOffset) {
        activeHighlightObject.start = fragment.start + selection.anchorOffset;
        activeHighlightObject.end = fragment.start + selection.focusOffset;
    } else {
        activeHighlightObject.start = fragment.start + selection.focusOffset;
        activeHighlightObject.end = fragment.start + selection.anchorOffset;
    }
    if (activeHighlightObject.end - activeHighlightObject.start == 0) return;
    let oRange = selection.getRangeAt(0); //get the text range
    let oRect = oRange.getBoundingClientRect();

    stijlmiddelPickerPosition.x = oRect.x;
    stijlmiddelPickerPosition.y = oRect.y;

    highlightFragments.push(activeHighlightObject);

    sortHighlightFragments();
    splitUpGedicht();
    sortFragments();
}

function getSelection() {
    let selection = {};
    if (window.getSelection || document.getSelection) {
        selection = window.getSelection();
    } else if (document.selection) {
        selection = document.selection;
    } else return; // To write the selected text into the textarea
    console.log(selection);
    return selection;
}
function splitUpGedicht() {
    // Reset gedichtobject.
    gedichtFragments.splice(0);
    console.log(gedichtFragments);
    highlightFragments.forEach((fragment) => {
        gedichtFragments.push(fragment);
    });

    // Indiced must be sorted... [{start: x, end: y}, {start: a, end: a}]

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

    let lastIndice = highlightFragments[highlightFragments.length - 1];
    gedichtFragments.splice(gedichtFragments.length - 1, 0, {
        start: lastIndice.end,
        end: gedichtref.value.length,
        // value: endOfGedicht,
        type: "unedited",
    });
}

function sortFragments() {
    gedichtFragments.sort((a, b) => {
        return a.start - b.start;
    });
}
function sortHighlightFragments() {
    highlightFragments.sort((a, b) => {
        return a.start - b.start;
    });
}
const isActive = (stijlmiddel) => {
    return stijlmiddel == activeHighlightObject.stijlmiddel;
};

function submit() {
    let url = route("gedicht.analyze.create", props.gedicht.uuid);
    Inertia.post(url, {
        highlightFragments,
    });
}
function setActiveObjectStijlmiddel(stijlmiddel) {
    activeHighlightObject.stijlmiddel = stijlmiddel;
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
                    Analyse maken
                </h2>
            </div>
        </template>
        <div
            v-if="activeHighlightObject.start"
            class="
                card
                flex
                z-50
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
                @click="setActiveObjectStijlmiddel(stijlmiddel)"
            >
                {{ stijlmiddel.name }}
            </button>
        </div>
        <div class="card mx-auto">
            <p
                class="
                    text-gray-100
                    mt-5
                    text-lg
                    font-light
                    leading-loose
                    whitespace-pre-wrap
                "
            >
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

            <div class="flex mt-5">
                <PrimaryButton @click="submit" class="ml-auto"
                    >Opslaan</PrimaryButton
                >
            </div>
        </div>
        <!-- <p class="card text-white mx-auto">
            {{ props.gedicht.gedicht }}
        </p> -->
    </AuthenticatedLayoutVue>
</template>