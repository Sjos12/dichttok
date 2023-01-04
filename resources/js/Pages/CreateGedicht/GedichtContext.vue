<script setup>
import AddGenreVue from "@/Components/AddGenre.vue";
import InputLabelVue from "@/Components/InputLabel.vue";
const props = defineProps({
    genres: Array,
    auteur: String,
    context: String,
    genre: Object,
});

defineEmits(["update:auteur", "update:context", "update:genre"]);
</script>   
<template>
    <div class="grid gap-y-3">
        <InputLabelVue>Door wie is je gedicht geschreven?*</InputLabelVue>
        <!-- <div v-if="authorChosen" class="flex">
            <SecondaryButtonVue
                v-if="gedichtForm.zelfGeschreven && authorChosen"
                @click="gedichtDoorMijzelf"
                >Mijzelf</SecondaryButtonVue
            >
            <span
                class="text-white my-auto mx-5"
                v-if="!gedichtForm.zelfGeschreven"
                >of</span
            >
            <SecondaryButtonVue
                v-if="!gedichtForm.zelfGeschreven"
                @click="gedichtDoorIemandAnders"
                >Iemand anders</SecondaryButtonVue
            >
        </div> -->
        <input
            :value="auteur"
            @input="$emit('update:auteur', $event.target.value)"
            class="form-control w-full"
            type="text"
            spellcheck="false"
            placeholder="John doe..."
        />
    </div>
    <div class="grid gap-y-3">
        <InputLabelVue>Context bij jou gedicht</InputLabelVue>
        <textarea
            :value="context"
            @input="$emit('update:context', $event.target.value)"
            class="form-control"
        ></textarea>
    </div>
    <AddGenreVue
        @genre_select="(genre) => $emit('update:genre', genre)"
        :genres="props.genres"
    />
</template>