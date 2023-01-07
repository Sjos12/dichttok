<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import GuestLayoutVue from "@/Layouts/GuestLayout.vue";
import ApplicationLogoVue from "@/Components/ApplicationLogo.vue";
import PrimaryButtonVue from "@/Components/PrimaryButton.vue";
import SecondaryButtonVue from "@/Components/SecondaryButton.vue";
import { Inertia } from "@inertiajs/inertia";
import container from "@/Layouts/Container.vue";
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
function register() {
    let url = route("register");
    Inertia.get(url);
}
function login() {
    let url = route("login");
    Inertia.get(url);
}
</script>


<template>
    <div class="bg-gray-900 h-screen">
        <nav class="w-full bg-gray-800 py-3">
            <container class="flex justify-between">
                <ApplicationLogoVue class="text-white fill-white h-10 w-10" />
                <div class="flex gap-5">
                    <SecondaryButtonVue @click="login"
                        >Sign in</SecondaryButtonVue
                    >
                    <PrimaryButtonVue @click="register"
                        >Sign up</PrimaryButtonVue
                    >
                </div>
            </container>
        </nav>

        <container class="h-full grid">
            <h1 class="text-white text-5xl my-auto font-thin">
                Dichttok, simpel gedichten lezen, analyseren en delen.
            </h1>
        </container>
    </div>
</template>
