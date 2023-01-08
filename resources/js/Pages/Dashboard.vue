<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/inertia-vue3";
import PrimaryButtonVue from "@/Components/PrimaryButton.vue";
import { Inertia } from "@inertiajs/inertia";
import GedichtVue from "./Gedicht.vue";
import GedichtFilters from "@/Components/GedichtFilters.vue";
import InputLabel from "@/Components/InputLabel.vue";
import { Link } from "@inertiajs/inertia-vue3";
const props = defineProps({
    gedichten: Array,
    genres: Array,
    genre: Object,
});
console.log(props.gedichten);
function gedichtMaken() {
    let url = route("gedicht.create.index");
    Inertia.visit(url);
}
</script>

<template>
    <div class="">
        <Head title="Dashboard" />

        <AuthenticatedLayout>
            <template #header>
                <div
                    class="flex top-0 snap-center justify-between items-center"
                >
                    <div class="flex flex-col w-full gap-y-2">
                        <h2
                            class="
                                font-semibold
                                text-xl text-gray-800
                                dark:text-gray-200
                                leading-tight
                            "
                        >
                            Gedichten
                        </h2>
                    </div>
                    <div class="flex items-center">
                        <label
                            class="
                                my-auto
                                font-medium
                                text-sm text-gray-700
                                dark:text-gray-300
                                flex
                                gap-5
                            "
                            v-if="props.genre"
                        >
                            <div
                                class="
                                    rounded-full
                                    justify-center
                                    items-center
                                    px-4
                                    py-1
                                    flex
                                    gap-3
                                    color-white
                                "
                                :style="{ backgroundColor: props.genre.color }"
                            >
                                <Link :href="route('dashboard')">
                                    <i class="fa fa-xmark"></i>
                                </Link>
                                {{ props.genre.name }}
                            </div>
                        </label>
                        <GedichtFilters :genres="props.genres" />
                        <PrimaryButtonVue
                            type="button"
                            @click="gedichtMaken"
                            class="whitespace-nowrap"
                            >Gedicht Uploaden</PrimaryButtonVue
                        >
                    </div>
                </div>
            </template>

            <div class="container mx-auto relative bg-gray-900">
                <template v-if="props.gedichten.length > 0">
                    <GedichtVue
                        class="snap-start"
                        v-for="gedicht in props.gedichten"
                        v-bind:key="gedicht.id"
                        :gedicht="gedicht"
                    ></GedichtVue>

                    ></template
                >

                <div class="text-white flex self-center m-auto" v-else>
                    <h1 class="m-auto">
                        Geen gedichten gevonden met de geselecteerde filters.
                    </h1>
                </div>
            </div>
        </AuthenticatedLayout>
    </div>
</template>
