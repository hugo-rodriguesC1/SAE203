<template>
  <footer class="flex flex-col justify-between bg-gray-100 md:h-52">
    <div class="relative mt-12 flex flex-row items-center justify-between p-6">
      <LogoBase class="w-12" />
      <router-link to="/mentions" class="font-barlow text-sm font-normal text-gray-900">Mentions légales</router-link>
      <!-- <LogoBase class="w-12 opacity-0" /> -->
      <router-link to="/admin" class="just hidden font-barlow text-xl font-bold uppercase text-gray-500 lg:block">Admin</router-link>
    </div>
    <p class="text-center font-barlow text-xs font-normal text-gray-900">Blend Up Festival - 2022</p>
  </footer>
</template>

<script>
import LogoBase from "./logo/LogoBase.vue";
export default {
  components: { LogoBase },
};
</script>