<template>
  <div class="mt-20 mb-20 grid place-content-center">
    <h1 class="mb-5 ml-3 text-3xl text-gray-800">Style Guide</h1>
    <h2 class="mb-2 ml-3 text-xl text-gray-600 dark:text-gray-300">Main colors</h2>
    <div class="flex">
      <Couleur class="bg-blue-400" />
      <Couleur class="bg-blue-600" />
      <Couleur class="bg-blue-800" />
      <Couleur class="border-2 bg-gray-100" />
    </div>

    <h2 class="mt-4 mb-2 ml-3 text-xl text-gray-600 dark:text-gray-300">Greyscale</h2>
    <div class="flex">
      <CouleurSmall class="ml-3 rounded-r-none rounded-l-3xl bg-gray-400 dark:bg-gray-400" />
      <CouleurSmall class="bg-gray-500 dark:bg-gray-500" />
      <CouleurSmall class="bg-gray-800 dark:bg-gray-800" />
      <CouleurSmall class="rounded-l-none rounded-r-3xl bg-gray-900 dark:bg-gray-900" />
    </div>
    <h2 class="mt-4 mb-3 ml-3 text-xl text-gray-600 dark:text-gray-300">Typeface</h2>
    <div class="flex">
      <div class="al ml-3 flex h-32 w-80 items-center justify-center rounded-l-3xl bg-blue-400">
        <p class="font-barlow text-6xl font-bold text-white">Aa</p>
        <p class="ml-6 font-barlow text-xl text-white">Barlow</p>
      </div>
      <div class="flex h-32 w-[435px] flex-col items-center justify-center gap-2 rounded-r-3xl bg-gray-200 dark:bg-gray-800">
        <p class="text-xl font-bold text-gray-900 dark:text-gray-200">aAbBcCdDeEfFgG • 1234567890</p>
        <div class="flex gap-5">
          <p class="font-barlow font-normal">Regular</p>
          <p class="font-barlow font-bold">Bold</p>
        </div>
      </div>
    </div>
    <h2 class="mt-4 mb-3 ml-3 text-xl text-gray-600 dark:text-gray-300">Styles</h2>
    <div class="ml-3 mb-6 mr-3 flex justify-between">
      <div class="flex flex-col">
        <p class="font-barlow text-sm font-bold">H1</p>
        <p class="font-barlow text-sm text-gray-600 dark:text-gray-300">Barlow (Bold)</p>
        <p class="font-barlow text-xs text-gray-600 dark:text-gray-300">30px font size</p>
      </div>
      <p class="font-barlow text-3xl font-bold uppercase">The quick brown fox jumps over the lazy dog</p>
    </div>
    <div class="ml-3 mb-6 mr-3 flex justify-between">
      <div class="flex flex-col">
        <p class="font-barlow text-sm font-bold">H2</p>
        <p class="font-barlow text-sm text-gray-600 dark:text-gray-300">Barlow (Bold)</p>
        <p class="font-barlow text-xs text-gray-600 dark:text-gray-300">24px font size</p>
      </div>
      <p class="font-barlow text-2xl font-bold uppercase">The quick brown fox jumps over the lazy dog</p>
    </div>
    <div class="ml-3 mb-6 mr-3 flex justify-between">
      <div class="flex flex-col">
        <p class="font-barlow text-sm font-bold">H3</p>
        <p class="font-barlow text-sm text-gray-600 dark:text-gray-300">Barlow (Bold)</p>
        <p class="font-barlow text-xs text-gray-600 dark:text-gray-300">20px font size</p>
      </div>
      <p class="font-barlow text-xl font-bold uppercase">The quick brown fox jumps over the lazy dog</p>
    </div>

    <div class="ml-3 mb-6 mr-3 flex justify-between">
      <div class="flex flex-col">
        <p class="font-barlow text-sm font-bold">Body</p>
        <p class="font-barlow text-sm text-gray-600 dark:text-gray-300">Barlow (Regular)</p>
        <p class="font-barlow text-xs text-gray-600 dark:text-gray-300">14px font size</p>
      </div>
      <p class="max-w-2xl text-right font-barlow text-sm font-normal">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
        humour, or randomised words which don't look even slightly believable.
      </p>
    </div>
  </div>
</template>

<script >
import Couleur from "../components/styleguide/Couleur.vue";
import CouleurSmall from "../components/styleguide/CouleurSmall.vue";
export default {
  name: "StyleGuide",
  components: {
    Couleur,
    CouleurSmall,
  },
};
</script>

<style scoped>
</style>