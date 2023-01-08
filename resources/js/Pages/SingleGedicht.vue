<script setup>
import Gedicht from "@/Pages/Gedicht.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Container from "@/Layouts/Container.vue";
import { Link } from "@inertiajs/inertia-vue3";
import PrimaryButton from "@/Components/PrimaryButton.vue";
const props = defineProps({
    gedicht: Object,
});
</script>
<template>
    <AuthenticatedLayout>
        <Container>
            <Link :href="route('gedicht.liked')"> Back </Link>
            <Gedicht :gedicht="props.gedicht"
        /></Container>
    </AuthenticatedLayout>
</template>