<script setup>
const props = defineProps({
    auth: Object,
    content: String,
});
</script>
<template>
    <span>{{ content }}</span>
</template>