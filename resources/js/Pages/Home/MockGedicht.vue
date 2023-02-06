
<script setup>
import InputLabel from "@/Components/InputLabel.vue";
import {computed} from "@vue/runtime-core";
import {DateTime} from "luxon";
import ViewGedichtAnalyse from "@/Pages/ViewGedichtAnalyse.vue";
import {ref} from "vue";

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
    isHighlighted: false,
    showTags: false,
})
const liked = ref(false);
function toggleLike() {
    liked.value =  !liked.value
}
let createdAt = computed(() => {
    return DateTime.fromISO(props.gedicht.created_at).toRelative();
});

</script>
<template>
    <div
        class="
        snap-start
                gedicht-height
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
                    v-if="!isHighlighted || !props.gedicht.analyses.length"
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

                <view-gedicht-analyse v-else :analysis="props.gedicht.analyses[0]" :gedicht="props.gedicht" ></view-gedicht-analyse>
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

                    >
                        Oorlog
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
