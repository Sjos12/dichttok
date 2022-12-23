<script setup>
import { reactive, ref } from "@vue/reactivity";
import AuthenticatedLayoutVue from "@/Layouts/AuthenticatedLayout.vue";
import Stijlmiddel from "@/Components/Stijlmiddel.vue";
import GedichtFragment from "@/Components/GedichtFragment.vue";
import InputLabelVue from "@/Components/InputLabel.vue";
const props = defineProps({
    gedicht: Object,
    analysis: Object,
});
console.log(props.analysis);
const displayInformationBox = ref(false);
const activeHoverFragment = reactive({});
const stijlmiddelPickerPosition = reactive({
    x: null,
    y: null,
});
const gedichtFragments = reactive([]);
const gedichtref = ref(props.gedicht.gedicht);
const highlightFragments = reactive(props.analysis.highlight_fragments);
splitUpGedicht();
sortFragments();
console.log(gedichtFragments);
function splitUpGedicht() {
    // Reset gedichtobject.
    gedichtFragments.splice(0);

    highlightFragments.forEach((fragment) => {
        fragment.type = "highlight";
        gedichtFragments.push(fragment);
    });

    // Indiced must be sorted... [{start: x, end: y}, {start: a, end: a}]

    // uneditedIndices = [];

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
function showInformationBox(event, fragment) {
    // var rect = event.target.getBoundingClientRect();
    var x = event.clientX; //x position within the element.
    var y = event.clientY;
    stijlmiddelPickerPosition.x = x;
    stijlmiddelPickerPosition.y = y;
    displayInformationBox.value = true;

    Object.assign(activeHoverFragment, fragment);
}
function hideInformationBox() {
    displayInformationBox.value = false;
}
</script>
<template>
    <div class="relative">
        <div class="absolute" v-if="displayInformationBox">
            <button
                class="text-white shadow-md rounded-md p-2 duration-100"
                :style="{
                    backgroundColor: activeHoverFragment.stijlmiddel.color,
                    top: stijlmiddelPickerPosition.y - 20 + 'px',
                    left: stijlmiddelPickerPosition.x + 'px',
                }"
            >
                {{ activeHoverFragment.stijlmiddel.name }}
                <!-- {{ activeHoverFragment.id }} -->
            </button>
        </div>

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
                    @mouseleave="hideInformationBox"
                    @mouseover="showInformationBox($event, fragment)"
                    @mouseup="getSelectedText(fragment)"
                    v-if="fragment.type == 'highlight'"
                    :content="gedichtref.slice(fragment.start, fragment.end)"
                    :ref="
                        (el) => {
                            fragment.element = el;
                        }
                    "
                    :stijlmiddel="fragment.stijlmiddel"
                    :key="idx"
                    class="whitespace-pre-wrap"
                />
                <GedichtFragment
                    v-else
                    @mouseup="getSelectedText(fragment)"
                    :content="gedichtref.slice(fragment.start, fragment.end)"
                    :key="idx + 1"
                    class="whitespace-pre-wrap"
                />
            </template>
        </p>
    </div>
</template>