<script setup>
import { Inertia } from "@inertiajs/inertia";
import { ref } from "@vue/reactivity";
// import { Ref } from "vue";
const query = ref("");
const debounceTime = 400;
function performSearch() {
    console.log("performed search");
    let url = route("search", {
        query: query.value,
    });
    Inertia.get(url);
}
function debounce(fn) {
    console.log("debounce");
    let timer;
    console.log(timer);
    if (timer) {
        clearTimeout(timer); // clear any pre-existing timer
    }
    const context = this; // get the current context
    timer = setTimeout(() => {
        console.log("call fn");
        fn.apply(context); // call the function if time expires
    }, debounceTime);
}
</script>
<template>
    <div
        class="
            absolute
            max-w-sm
            w-full
            left-1/2
            -translate-x-1/2
            top-1/2
            -translate-y-1/2
        "
    >
        <input
            @keydown="debounce(() => performSearch())"
            v-model="query"
            placeholder="Zoek naar een gedicht, genre of stijlmiddel"
            class="form-control w-full"
        />
    </div>
</template>