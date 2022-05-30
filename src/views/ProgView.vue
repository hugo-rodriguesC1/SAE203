<template>
  <main class="mx-6 sm:mx-32 sm:mb-56 md:mx-44 md:mt-6 lg:m-0 lg:grid lg:grid-cols-6">
    <div class="col-span-2"></div>
    <div class="col-span-2">
      <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase">Programmation</h1>
      <div class="flex flex-grow flex-col">
        <h2 class="mt-6 font-barlow text-2xl font-bold uppercase">Vendredi</h2>
        <div class="mt-4 overflow-x-scroll">
          <div class="flex h-32 w-[410px] flex-row gap-5 sm:w-full md:h-48">
            <ConcertCard blue="400" horaire="20h00-21h30" session="1" />
            <ConcertCard blue="400" horaire="21h45-23h15" session="2" />
            <ConcertCard blue="400" horaire="23h30-01h00" session="3" />
          </div>
        </div>
        <h2 class="mt-9 font-barlow text-2xl font-bold uppercase">Samedi</h2>
        <div class="mt-4 overflow-x-scroll">
          <div class="flex h-32 w-[410px] flex-row gap-5 sm:w-full md:h-48">
            <ConcertCard blue="600" horaire="20h00-21h30" session="1" />
            <ConcertCard blue="600" horaire="21h45-23h15" session="2" />
            <ConcertCard blue="600" horaire="23h30-01h00" session="3" />
          </div>
        </div>
        <h2 class="mt-9 font-barlow text-2xl font-bold uppercase">Dimanche</h2>
        <div class="mt-4 overflow-x-scroll">
          <div class="flex h-32 w-[410px] flex-row gap-5 sm:w-full md:h-48">
            <ConcertCard blue="800" horaire="20h00-21h30" session="1" />
            <ConcertCard blue="800" horaire="21h45-23h15" session="2" />
            <ConcertCard blue="800" horaire="23h30-01h00" session="3" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ConcertCard from "../components/ConcertCard.vue";
export default {
  components: { ConcertCard },
};
</script>