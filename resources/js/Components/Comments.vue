<script setup>
import { Inertia } from "@inertiajs/inertia";
import { ref } from "@vue/reactivity";
import InputLabel from "./InputLabel.vue";
import PrimaryButton from "./PrimaryButton.vue";
const props = defineProps(["comments", "gedicht"]);
const emits = defineEmits(["toggleModal"]);

const comment = ref("");

function submitComment() {
    console.log(props.comments, props.gedicht);
    let url = route("comment.create", props.gedicht.uuid);
    Inertia.post(
        url,
        { comment: comment.value },
        {
            preserveState: true,
            preserveScroll: true,
        }
    );
}
function sendLike(commentArg) {
    console.log(commentArg);
    let url = route("comment.like");
    Inertia.post(
        url,
        { comment_id: commentArg.id },
        {
            preserveState: true,
            preserveScroll: true,
        }
    );
}
</script>
<template>
    <div class="grid gap-y-5">
        <div
            @click.self="$emit('toggleModal')"
            class="bg-gray-800 rounded-md h-2 w-12 mx-auto mb-10 mt-2"
        ></div>
        <div class="flex justify-between">
            <h1 class="text-gray-200 text-xl font-medium">Comments</h1>
        </div>
        <div class="flex flex-col gap-y-3">
            <!-- <InputLabel>Reager op dit gedicht.</InputLabel> -->
            <textarea v-model="comment" class="form-control"></textarea>
            <PrimaryButton @click="submitComment" class="ml-auto"
                >Reageren</PrimaryButton
            >
        </div>
        <div class="grid">
            <template v-if="props.comments.length > 0">
                <div
                    v-for="comment of props.comments"
                    :key="comment.id"
                    class="card flex gap-y-2 w-full bg-gray-700"
                >
                    <div class="grid grow shrink-0">
                        <div class="flex justify-between items-center">
                            <InputLabel class="text-xs">{{
                                comment.user.name
                            }}</InputLabel>
                        </div>
                        <span> {{ comment.comment }}</span>
                    </div>

                    <button
                        class="
                            my-auto
                            grid
                            justify-center
                            gap-y-2
                            grow-0
                            shrink
                        "
                        @click="sendLike(comment)"
                    >
                        <i
                            :class="likedGedicht ? 'text-red-500' : ''"
                            class="fa fa-heart fa-lg"
                        ></i>

                        <span class="m-0 text-xs">
                            {{ comment.likes.length }}
                        </span>
                    </button>
                </div>
            </template>
        </div>

        <span v-if="props.comments.length == 0" class="m-auto">
            No comments yet
        </span>
    </div>
</template>