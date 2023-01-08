<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Container from "@/Layouts/Container.vue";
import { Link } from "@inertiajs/inertia-vue3";
const props = defineProps({
    gedichten: Array,
});
</script>
<template>
    <AuthenticatedLayout>
        <template class="flex" #header>
            <div class="flex justify-between items-center">
                <h1
                    class="
                        font-semibold
                        text-xl text-gray-800
                        dark:text-gray-200
                        leading-tight
                    "
                >
                    Opgeslagen gedichten
                </h1>
            </div>
        </template>

        <Container>
            <div class="grid md:grid-cols-3 gap-5">
                <Link
                    v-for="gedicht of gedichten"
                    :key="gedicht.uuid"
                    :href="route('gedicht.single', gedicht.uuid)"
                    class="
                        card
                        max-h-['100vh']
                        hover:shadow-xl
                        duration-75
                        ease-in-out
                    "
                >
                    <h1 class="text-gray-200 text-xl font-medium">
                        {{ gedicht.titel }}
                    </h1>

                    <p
                        v-if="!analyseIsOpen"
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
                        {{ gedicht.gedicht }}
                    </p>
                </Link>
            </div>
        </Container>
    </AuthenticatedLayout>
</template>