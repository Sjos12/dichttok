<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/inertia-vue3";
</script>

<template>
    <nav
        class="
        z-50
            min-h-screen
            pt-6
            sm:pt-0
            bg-gray-100
            dark:bg-gray-900
            grid
            items-center
        "
    >
        <div class="flex flex-col justify-center items-center mb-36">
            <div>
                <Link href="/">
                    <ApplicationLogo
                        class=" h-20 fill-current text-gray-500"
                    />
                </Link>
            </div>

            <div
                class="
                    w-full
                    sm:max-w-md
                    mt-6
                    px-6
                    py-4
                    bg-white
                    dark:bg-gray-800
                    shadow-md
                    overflow-hidden
                    sm:rounded-lg
                "
            >
                <slot />
            </div>
        </div>
    </nav>
</template>
