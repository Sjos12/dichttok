<script setup>
import { reactive, ref } from "@vue/reactivity";
import AuthenticatedLayoutVue from "@/Layouts/AuthenticatedLayout.vue";
import Stijlmiddel from "@/Components/Stijlmiddel.vue";
import GedichtFragment from "@/Components/GedichtFragment.vue";
import InputLabelVue from "@/Components/InputLabel.vue";
const props = defineProps({
    gedicht: Object,
    highlightFragments: Object,
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
const highlightFragments = reactive(props.highlightFragments);

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
        <!-- <button @click.self="likeAnalysis">
            <i class="fa fa-heart fa-lg my-auto"></i>
        </button> -->
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
                    v-if="fragment.type === 'highlight'"
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
