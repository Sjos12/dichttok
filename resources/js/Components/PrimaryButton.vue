<script setup>
defineProps({
    type: {
        type: String,
        default: "submit",
    },
});
</script>

<template>
    <button
        :type="type"
        class="
            inline-flex
            items-center
            px-4
            py-2
            bg-gray-800
            dark:bg-indigo-500
            border border-transparent
            rounded-md
            font-semibold
            text-xs text-white
            uppercase
            tracking-widest
            hover:bg-indigo-400
            duration-300

            ease-in-out
            transition-all
            hover:shadow-lg
            focus:bg-gray-700
            dark:focus:bg-white
            active:bg-gray-900
            dark:active:bg-gray-300
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:ring-offset-2
            dark:focus:ring-offset-gray-800
            transition
            ease-in-out
            duration-150
        "
    >
        <slot />
    </button>
</template>
