<script setup>
import InputLabelVue from "@/Components/InputLabel.vue";
import { computed } from "@vue/runtime-core";
import { DateTime } from "luxon";
const props = defineProps({
    gedicht: Object,
});

let createdAt = computed(() => {
    return DateTime.fromISO(props.gedicht.created_at).toRelative();
});
</script>
<template>
    <div class="card mx-auto h-screen max-w-xl py-10 flex flex-col gap-y-5">
        <div class="flex w-full justify-between items-center">
            <InputLabelVue>
                {{ props.gedicht.user.name }}
            </InputLabelVue>
            <InputLabelVue>
                {{ createdAt }}
            </InputLabelVue>
        </div>
        <div class="flex h-full">
            <div class="flex flex-col gap-y-5">
                <h1 class="text-gray-200 text-xl font-medium">
                    {{ props.gedicht.titel }}
                </h1>
                <p class="text-gray-100 mt-5 text-lg font-light leading-loose">
                    {{ props.gedicht.gedicht }}
                </p>
                <span class="mt-10 text-gray-300">
                    {{ "- " + props.gedicht.auteur }}
                </span>
            </div>
            <div class="mt-auto text-white flex flex-col gap-y-10 my-10">
                <button>
                    <i class="fa fa-heart fa-2xl"></i>
                    {{ props.gedicht.likes.length }}
                </button>

                <button>
                    <i class="fa fa-comments fa-xl"></i>
                </button>
            </div>
        </div>
    </div>
</template>
