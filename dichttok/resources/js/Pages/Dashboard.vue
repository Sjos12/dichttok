<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/inertia-vue3";
import PrimaryButtonVue from "@/Components/PrimaryButton.vue";
import { Inertia } from "@inertiajs/inertia";
import GedichtVue from "./Gedicht.vue";
const props = defineProps({
    gedichten: Object,
});
function gedichtMaken() {
    let url = route("gedicht.create.index");
    Inertia.visit(url);
}
</script>

<template>
    <div class="">
        <Head title="Dashboard" />

        <AuthenticatedLayout>
            <template class="flex" #header>
                <div class="flex justify-between items-center">
                    <h2
                        class="
                            font-semibold
                            text-xl text-gray-800
                            dark:text-gray-200
                            leading-tight
                        "
                    >
                        Feed
                    </h2>
                    <PrimaryButtonVue
                        type="button"
                        @click="gedichtMaken"
                        class=""
                        >Gedicht Maken</PrimaryButtonVue
                    >
                </div>
            </template>

            <div class="py-12">
                <GedichtVue
                    v-for="gedicht in props.gedichten"
                    v-bind:key="gedicht.id"
                    :gedicht="gedicht"
                ></GedichtVue>
                <!-- <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div
                        class="
                            bg-white
                            dark:bg-gray-800
                            overflow-hidden
                            shadow-sm
                            sm:rounded-lg
                        "
                    >
                        <div class="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in!
                        </div>
                    </div>
                </div> -->
            </div>
        </AuthenticatedLayout>
    </div>
</template>
