<template>
  <main class="mx-6 bg-gray-100 sm:mx-32 sm:mb-80 md:mx-44 md:mt-6 lg:m-0 lg:mt-40 lg:grid lg:grid-cols-6">
    <div class="col-span-1"></div>
    <div class="col-span-2 hidden lg:block">
      <img src="/Concert/concert.png" alt="photo de concert" class="w-full" />
      <div class="mt-6 flex flex-row justify-center gap-4">
        <div class="flex flex-col">
          <img src="/Concert/travis.png" alt="travis" />
          <p class="text-center font-barlow text-xl font-bold uppercase">
            Travis <br />
            Scott
          </p>
        </div>
        <div class="flex flex-col">
          <img src="/Concert/laylow.png" alt="laylow" />
          <p class="text-center font-barlow text-xl font-bold uppercase">Laylow</p>
        </div>
        <div class="flex flex-col">
          <img src="/Concert/lafeve.png" alt="lafeve" />
          <p class="text-center font-barlow text-xl font-bold uppercase">La Fève</p>
        </div>
      </div>
    </div>
    <div class="col-span-2 lg:mx-24">
      <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase md:mb-10">
        Session 3 <br />
        Vendredi
      </h1>
      <h2 class="mt-5 text-center font-barlow text-xl font-bold uppercase text-gray-400 md:mb-10">23h30 - 01h00</h2>
      <p class="mt-6 font-barlow text-sm font-normal md:mb-10">
        Assistez à la dernière session du vendredi avec notamment Travis Scott, Laylow et bien d’autres pour un show teinté d’une ambiance
        électronique.
      </p>
      <h3 class="mt-6 font-barlow text-xl font-bold uppercase md:mb-10 lg:hidden">Artistes présents</h3>
      <p class="mt-6 font-barlow text-sm font-normal md:mb-10 lg:hidden">Travis Scott, Laylow, ElGrandeToto, La Fève ...</p>
      <h3 class="mt-6 font-barlow text-xl font-bold uppercase md:mb-10">Achetez vos places</h3>
      <ButtonBuy class="mx-auto mt-7 mb-32" />
      <div class="h-2 md:h-40"></div>
    </div>
  </main>
</template>

<script>
import ButtonBuy from "../components/icon/ButtonBuy.vue";
export default {
  components: { ButtonBuy },
};
</script>