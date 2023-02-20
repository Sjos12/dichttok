
<script setup>
import InputLabel from "@/Components/InputLabel.vue";
import {computed} from "@vue/runtime-core";
import {DateTime} from "luxon";
import ViewGedichtAnalyse from "@/Pages/ViewGedichtAnalyse.vue";
import {ref} from "vue";
import {reactive} from "@vue/reactivity";

const emit = defineEmits(['updateGedicht']);
const props = defineProps({
    gedicht: {
        titel: '',
        gedicht: '',
        user: {
            name: ''
        },
        author: '',
        analysis: Object,
    },
    stijlmiddelen: Array,
    isHighlighted: false,
    tags: Array,
    showTags: false,
})
const liked = ref(false);
function toggleLike() {
    liked.value =  !liked.value
}

const randomTag = computed(() => {
    return props.tags[Math.floor(Math.random()*props.tags.length)];
});
const highlights = computed(() => {
    let gedicht = props.gedicht.gedicht;
    let splittedArray = gedicht.split(' ');

    let idxCount = 0;
    let highlights = [];

    splittedArray.forEach((word, idx) => {
        console.log(word, word.length, idx);

        if (idx % 2 === 0 ) {
            highlights.push({
                start: idxCount,
                end: idxCount + word.length,
                type: 'highlight',
                stijlmiddel: props.stijlmiddelen[Math.floor(Math.random() * (props.stijlmiddelen.length))],
            })
        }
        else  {
            idxCount += word.length + 1;
            return;
        }
        idxCount += word.length + 1;
    });
    console.log('foo', highlights);
    return highlights;
});
let createdAt = computed(() => {
    return DateTime.fromISO(props.gedicht.created_at).toRelative();
});

</script>
<template>
    <div
        class="
        snap-start
        sticky gedicht-height col-start-8 col-end-12 top-14 bottom-20

                drop-shadow-xl
                shadow-xl
                card
                bg-gray-800
                mx-auto

                gap-y-4
                flex
                w-full
                flex-col
            "
    >
        <div class="flex w-full justify-between items-center">
            <InputLabelVue class="font-normal text-gray-400">
                {{  props.gedicht.user.name }}
            </InputLabelVue>
            <InputLabelVue class="font-light text-gray-400">
                {{ createdAt }}
            </InputLabelVue>
        </div>
        <div class="flex h-full mt-5 gap-3 max-h-full">
            <div class="flex flex-col gap-y- w-full overflow-y-auto">
                <h1 class="text-gray-100 text-xl font-medium">
                     {{ props.gedicht.titel }}
                </h1>

                <p
                    v-if="!isHighlighted"
                    class="
                            overflow-y-auto
                            whitespace-pre-wrap
                            text-gray-100
                            mt-5
                            text-lg
                            font-light
                            leading-loose
                        "
                >
                    {{ props.gedicht.gedicht }}
                </p>

                <view-gedicht-analyse v-if="isHighlighted" :highlight-fragments="highlights" :gedicht="props.gedicht" ></view-gedicht-analyse>
                <div class="flex justify-between">
                        <span class="mt-5 text-gray-300">
                            - {{ props.gedicht.auteur }}
                        </span>
                    <div
                        v-if="showTags"
                        class="
                                rounded-full
                                justify-center
                                items-center
                                px-4
                                py-1
                                flex
                                gap-3
                                bg-indigo-700
                                mt-auto
                                ml-auto
                                text-xs text-white
                            "
                        :style="{
                                backgroundColor: randomTag.color,
                            }"
                    >
                        {{ randomTag.name }}
                    </div>
                </div>
            </div>
            <div
                class="
                        max-h-full
                        text-white
                        flex flex-col
                        gap-y-5
                        mt-auto
                        grow-0
                        shrink
                    "
            >
                <button
                    class="flex flex-col mt-5 gap-y-5"
                    @click="toggleLike"

                >
                    <i  :class="liked ? 'text-red-500' : ''"
                        class="fa fa-heart fa-2xl"
                    ></i>
                    <span>
                        {{ props.gedicht.likes_count + (liked ? 1 : 0) }}
                    </span>
                </button>

                <button
                    class="flex py-5 flex-col gap-y-5"

                >
                    <i class="fa fa-comments fa-xl"></i>
                </button>

                <button
                    class="flex py-5 flex-col gap-y-5"

                >
                    <i class="fa fa-magnifying-glass-chart fa-xl"></i>
                </button>
            </div>
        </div>
        <div class="flex w-full">
            <button>
                <i
                    class="fa fa-xl text-white"
                ></i>
            </button>
            <button >
                <i class="fa-solid fa-xl fa-volume-xmark text-white"></i>
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>
