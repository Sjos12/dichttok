<script lang="ts" setup>
import { computed } from "@vue/runtime-core";
import { isReactive, reactive, ref } from "@vue/reactivity";

defineExpose({
    position,
});
const props = defineProps({
    auth: Object,
    content: String,
    stijlmiddel: Object,
});

// const stijlmiddel = ref(null);
// const color = computed(() => {
//     // Retrieve color of stijlmiddel
//     return stijlmiddel.color;
// });
function position() {
    let rect = this.stijlmiddel.getBoundingClientRect();
    return {
        x: rect.x,
        y: rect.x,
    };
}
</script>
<template>
    <span
        ref="stijlmiddel"
        class="stijlmiddel"
        :style="{ backgroundColor: props.stijlmiddel.color }"
        >{{ props.content }}</span
    >
</template>
<style lang="scss" scoped>
.stijlmiddel {
    @apply border-b-2 border-b-gray-200;
}
</style>