<template>
  <main class="mx-6 mb-96 sm:mx-32 sm:mb-56 md:mx-44 md:mt-6 lg:m-0 lg:mb-96 lg:grid lg:grid-cols-6">
    <div class="col-span-2"></div>
    <div class="col-span-2">
      <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase">Administration</h1>

      <div class="mt-10 flex flex-row items-center justify-between">
        <h2 class="font-barlow text-2xl font-bold uppercase">Artistes</h2>
        <router-link to="/listea">
          <ButtonBlue />
        </router-link>
      </div>
      <div class="mt-6 flex flex-row items-center justify-between">
        <h2 class="font-barlow text-2xl font-bold uppercase">Photos</h2>
        <router-link to="/listep">
          <ButtonBlue />
        </router-link>
      </div>
    </div>
    <div class="h-72"></div>
  </main>
</template>

<script>
import ButtonBlue from "../../components/icon/ButtonBlue.vue";
export default { components: { ButtonBlue } };
</script>