<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import {Head, Link} from "@inertiajs/inertia-vue3";
import GuestLayoutVue from "@/Layouts/GuestLayout.vue";
import ApplicationLogoVue from "@/Components/ApplicationLogo.vue";
import PrimaryButtonVue from "@/Components/PrimaryButton.vue";
import SecondaryButtonVue from "@/Components/SecondaryButton.vue";
import {Inertia} from "@inertiajs/inertia";
import Container from "@/Layouts/Container.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import MockGedicht from "@/Pages/Home/MockGedicht.vue";
import {reactive} from "@vue/reactivity";
import {ref} from "vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";

const props = defineProps({
    genres: Object,
    gedichten: Array,
    analysis_gedicht: Object,
    user_total: Number,
    gedichten_total: Number,
});

const mockGedicht = reactive(props.gedichten[3]);
const gedichtContent = mockGedicht.gedicht;
mockGedicht.gedicht = '';
const displayTextArray = gedichtContent.split(' ');
console.log(displayTextArray);
const displayTextArrayIndex = ref(0);
const textSpeed = ref(200);
const newTextDelay = ref(200);
const stopTyping = ref(false);
let charIndex = 0;
const typeStatus = ref(false);
let doodleIndex = 0;

function register() {
    let url = route("register");
    Inertia.get(url);
}

function login() {
    let url = route("login");
    Inertia.get(url);
}

typeText();

function typeText() {
    if (stopTyping.value) return;
    if (displayTextArray[displayTextArrayIndex.value].length <= charIndex) {
        mockGedicht.gedicht += " ";
        displayTextArrayIndex.value += 1;
        charIndex = 0;
    }

    mockGedicht.gedicht += displayTextArray[displayTextArrayIndex.value].charAt(
        charIndex
    );
    charIndex += 1;

    if (displayTextArrayIndex.value >= displayTextArray.length) {
        typeStatus.value = false;

        setTimeout(eraseText, textSpeed.value);
    }
    // Wait
    setTimeout(typeText, textSpeed.value);
}

function eraseText() {
    if (stopTyping.value) return;
    if (!typeStatus) typeStatus.value = true;
    console.log('erase text');
    mockGedicht.gedicht = displayTextArray[displayTextArrayIndex.value].substring(
        0,
        charIndex - 1
    );
    charIndex -= 1;
    setTimeout(eraseText, textSpeed.value);
}

function randomNumber() {
    let min = 20;
    let max = 40;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomSVGUrl() {
    let basePath = '/assets/'
    let urls = [
        // 'undraw_arrow.svg',
        'undraw_sticky-note.svg',
        'undraw_chat.svg',
        'undraw_star.svg',
        "undraw_flower.svg",
        'undraw_heart-fun.svg',
        'undraw_exclamation-point.svg',
        'undraw_clock.svg',
        // 'undraw_arrow.svg',
    ]
    if (doodleIndex >= urls.length) doodleIndex = 0;
    let url = urls[doodleIndex];
    doodleIndex++;
    return basePath + url;
}


</script>


<template>

    <div class="bg-gray-900 ">
        <nav class="z-50 relative shadow-lg w-full bg-gray-800 py-3">
            <container class="flex justify-between">
                <ApplicationLogoVue class="text-white fill-white h-10"/>
                <div class="flex gap-5">
                    <PrimaryButtonVue @click="register"
                    >Registreer
                    </PrimaryButtonVue
                    >
                    <SecondaryButtonVue @click="login"
                    >Log in
                    </SecondaryButtonVue
                    >

                </div>
            </container>
        </nav>

        <container class="h-screen grid grid-cols-12">
            <div class="col-span-6 my-auto gap-y-5 grid items-center pb-12">
                <small>DichtNet is de</small>
                <h1 class="text-white font-semibold text-6xl leading-tight ">De grootste gratis online dichtbundel.</h1>
                <p>
                    Het platform om nieuwe gedichten te vinden, je eigen gedichten te uploaden en ze te delen met je
                    vrienden.
                </p>
                <div class="flex gap-5 items-center">
                    <PrimaryButton @click="register" class="btn btn-primary  rounded-full px-6 py-2">
                        Registreer nu!
                    </PrimaryButton>
                    <span class="text-gray-300 text-sm font-light">of</span>
                    <SecondaryButton @click="login" class=" rounded-full bg-transparent px-6 py-2">
                        Log in.
                    </SecondaryButton>
                </div>
            </div>
            <div class="col-span-1 h-screen grid">
                <div class="mx-auto">
                    <img :style="{
                    marginTop: 14 + 'rem'
                }" class="doodle" :src="getRandomSVGUrl()" alt="Arrow to the right"/>


                    <img v-for="number in 4" :style="{
                    marginTop: randomNumber() + 'rem'
                }" class="doodle" :src="getRandomSVGUrl()" alt="Arrow to the right"></div>

            </div>
            <div class="col-span-4 h-screen  relative">


                <div class="relative h-screen mx-auto z-0">


                    <!-- Overflow -->
                    <!--                    <MockGedicht class="snap-none"></MockGedicht>-->
                    <!-- Hero -->
                    <div class="gedicht-height">
                        Input illustration here.
                    </div>
                    <!--                    <MockGedicht class="snap-none" :gedicht="props.gedichten[0]"></MockGedicht>-->
                    <!-- Library -->

                    <!--                    <MockGedicht :gedicht="props.gedichten[2]"></MockGedicht>-->
                    <!--                    &lt;!&ndash; Analysis &ndash;&gt;-->

                    <!--                    <MockGedicht :is-highlighted="true" :gedicht="analysis_gedicht"></MockGedicht>-->
                    <!--                    &lt;!&ndash; Create your own (gedicht 3)  &ndash;&gt;-->
                    <!--                    <MockGedicht :gedicht="mockGedicht"></MockGedicht>-->
                    <!--                    <MockGedicht :show-tags="true" :gedicht="props.gedichten[4]"></MockGedicht>-->
                    <!--                    <MockGedicht></MockGedicht>-->
                    <!--                    <MockGedicht></MockGedicht>-->
                </div>

            </div>
            <div class="col-span-1 h-screen grid ">
                <div class="mx-auto">
                    <img :style="{
                    marginTop: 8 + 'rem'
                }" class="doodle" :src="getRandomSVGUrl()" alt="Arrow to the right"/>
                    <img v-for="number in 7" :src="getRandomSVGUrl()" :style="{
                    marginTop: randomNumber() + 'rem'
                }" class="doodle" alt="Arrow to the right">
                </div>
            </div>

        </container>
        <container class="h-full grid grid-cols-12 snap-start">
            <div class="col-span-6 my-auto gap-y-5 grid items-center">
                <small>DichtNet is een</small>
                <h2 class="text-white font-medium text-5xl leading-tight ">Een verzameling van honderden gratis
                    gedichten.</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore eligendi ipsum, laborum
                    magnam sed sint! At autem cupiditate doloremque facere fugiat reiciendis! Ab dolore laboriosam
                    maiores saepe suscipit voluptatibus?
                </p>

                <div class="flex gap-10">
                    <div class="grid">
                        <small>Gedichten</small>
                        <h3 class="text-white text-4xl font-semibold">
                            {{ gedichten_total }}+
                        </h3>
                    </div>
                    <div class="grid">
                        <small>Gebruikers</small>
                        <h3 class="text-white text-4xl font-semibold">
                            {{ user_total }}+
                        </h3>
                    </div>

                </div>
            </div>
        </container>

        <!-- Show gedicht element -->
        <div class="grid relative h-full">
            <div class="absolute w-full h-full">
                <container class=" h-full mx-auto grid grid-cols-12 ">
                    <MockGedicht class="sticky gedicht-height col-start-8 col-end-12 top-20"
                                 :gedicht="props.gedichten[1]"></MockGedicht>
                </container>

            </div>

            <container class="gedicht-height grid grid-cols-12 ">
                <div class="col-span-6 my-auto gap-y-5 grid items-center">
                    <small>Met DichtNet</small>
                    <h2 class="text-white font-medium text-5xl leading-tight ">Analyseer je gedichten..</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore eligendi ipsum,
                        laborum
                        magnam sed sint! At autem cupiditate doloremque facere fugiat reiciendis! Ab dolore laboriosam
                        maiores saepe suscipit voluptatibus?
                    </p>

                </div>
            </container>
            <container class="gedicht-height grid grid-cols-12 ">
                <div class="col-span-7 my-auto gap-y-5 grid items-center">
                    <small>Met DichtNet</small>
                    <h2 class="text-white font-medium text-5xl leading-tight ">Deel je eigen gedichten met de
                        wereld.</h2>

                    <div class="flex">
                        <div class="card shadow-xl text-gray-200">
                            <div class="grid gap-y-5">
                                <div class="grid gap-y-3">
                                    <InputLabelVue>Titel van je gedicht*</InputLabelVue>
                                    <input
                                        v-model="mockGedicht.titel"
                                        spellcheck="false"
                                        class="form-control text-gray-200 text-xl font-medium"
                                        type="text"
                                    />
                                </div>
                                <div class="grid gap-y-3">
                                    <InputLabelVue>Jouw gedicht*</InputLabelVue>

                                    <textarea
                                        @input="() => stopTyping = true"
                                        v-model="mockGedicht.gedicht"
                                        spellcheck="false"

                                        class="form-control h-64"
                                    ></textarea>
                                    <span class="ml-auto text-gray-300 font-thin text-sm">
                {{ mockGedicht.gedicht.length + " / 1000" }} characters
                </span>
                                </div>
                            </div>
                            <!--                        <div class="stepped-form-buttons">-->
                            <!--                            <PrimaryButton>Submit</PrimaryButton>-->
                            <!--                        </div>-->
                        </div>
                        <div class="flex grow  justify-center items-center">
                            <img class="animate-bounce duration-75 ease-in-out h-20 w-20 mx-auto text-indigo-500"
                                 src="/assets/undraw_arrow.svg" alt="Arrow to the right">
                        </div>
                    </div>
                </div>
            </container>
            <container class="gedicht-height grid grid-cols-12 ">
                <div class="col-span-6 my-auto gap-y-5 grid items-center">
                    <small>DichtNet heeft</small>
                    <h2 class="text-white font-medium text-5xl leading-tight ">Alle genre’s op een plek.</h2>
                    <p>
                        Iedereen heeft zijn eigen voorkeuren. Daarom kan je gedichten filtreren op basis van een genre.
                        Hierdoor vind je makkelijker gedichten die je zelf interessant vindt.
                    </p>
                    <div class="flex gap-4 flex-wrap w-full justify-start">
                        <div
                            v-for="genre of props.genres"
                            :key="genre.id"
                            :style="{backgroundColor: genre.color}"

                            class="
                                rounded-full
                                justify-center
                                items-center
                                px-4
                                py-1
                                flex
                                gap-3
                                bg-indigo-700
                                mt-auto

                                text-xs text-white
                            "

                        >
                            {{ genre.name }}
                        </div>
                    </div>

                </div>
            </container>
        </div>

        <container class="gedicht-height snap-start grid grid-cols-12 snap-start">
            <div
                class="col-start-2 col-end-11 my-auto px-10 py-20  bg-gray-800 shadow-xl rounded-md hover:drop-shadow-xl gap-y-5 grid items-center justify-center gap-5">
                <img src="/assets/gedicht_lady.jpg"
                     class="w-full border-2 border-indigo-500 h-72 rounded-md shadow- object-cover object-top" alt="">
                <h2 class="text-white font-medium text-4xl leading-tight text-center ">
                    Overtuigd?
                    Sluit je gratis aan!</h2>
                <p>
                    Dichtnet is en blijft altijd een gratis, community gedreven platform.
                </p>
                <PrimaryButton @click="register" class="mx-auto rounded-full px-6 py-2">Maak je account</PrimaryButton>
            </div>
        </container>
        <div class="relative bottom-0 w-full bg-gray-800 py-4 snap-start">
            <container class="mx-auto w-full">
                <small class="mx-auto text-center font-thin text-sm text-gray-300 ">Copyright Denzel Stellingwerf
                    2023.</small>
            </container>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.doodle {
    position: relative;
    opacity: 0.6;

    @apply w-12 h-12 z-50 ;
}
</style>
