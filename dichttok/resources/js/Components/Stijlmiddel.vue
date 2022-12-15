<script lang="ts" setup>
import { computed } from "@vue/runtime-core";

const props = defineProps({
    auth: Object,
    content: String,
    stijlmiddel: Number,
});
const color = computed(() => {
    // Retrieve color of stijlmiddel
    return "bg-green-600";
});
</script>
<template>
    <span class="stijlmiddel" :class="color">{{ props.content }}</span>
</template>
<style lang="scss" scoped>
.stijlmiddel {
    @apply border-b-2 border-b-gray-200;
}
</style>