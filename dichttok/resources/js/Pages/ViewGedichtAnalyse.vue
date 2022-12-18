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
</script>
<template>
    <p class="text-gray-100 mt-5 text-lg font-light leading-loose">
        <template v-for="(fragment, idx) of gedichtFragments">
            <Stijlmiddel
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
            />
            <GedichtFragment
                v-else
                @mouseup="getSelectedText(fragment)"
                :content="gedichtref.slice(fragment.start, fragment.end)"
                :key="idx + 1"
            />
        </template>
    </p>
</template>