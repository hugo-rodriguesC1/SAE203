<template>
  <div v-if="blue == '400'" class="flex flex-grow flex-col items-center justify-center gap-2 self-stretch bg-blue-400 px-0.5">
    <h3 class="text-center font-barlow text-xl font-bold uppercase text-white">Session {{ session }}</h3>
    <h3 class="text-center font-barlow text-xl font-bold uppercase text-white">{{ horaire }}</h3>
  </div>
  <div v-if="blue == '600'" class="flex flex-grow flex-col items-center justify-center gap-2 self-stretch bg-blue-600 px-0.5">
    <h3 class="text-center font-barlow text-xl font-bold uppercase text-white">Session {{ session }}</h3>
    <h3 class="text-center font-barlow text-xl font-bold uppercase text-white">{{ horaire }}</h3>
  </div>
  <div v-if="blue == '800'" class="flex flex-grow flex-col items-center justify-center gap-2 self-stretch bg-blue-800 px-0.5">
    <h3 class="text-center font-barlow text-xl font-bold uppercase text-white">Session {{ session }}</h3>
    <h3 class="text-center font-barlow text-xl font-bold uppercase text-white">{{ horaire }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    blue: String,
    session: String,
    horaire: String,
  },
};
</script> 