<template>
  <header>
    <HeaderComp />
  </header>

  <RouterView />

  <FooterComp />
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
export default {
  components: { HeaderComp, FooterComp },
};
</script>