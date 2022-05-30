<template>
  <main class="mx-6 sm:mx-32 md:mx-44 md:mt-6 lg:mx-64 lg:grid lg:grid-cols-2 lg:gap-40">
    <img src="/HomeIllustration.svg" alt="ilustration aux couleurs du festival" class="mx-auto mt-6 md:w-full" />
    <div>
      <h1 class="mt-6 hidden text-center font-barlow text-3xl font-bold uppercase lg:block">Blend Up</h1>
      <p class="mt-9 font-barlow text-sm font-normal">
        La première édition de Blend Up se tiendra à Paris les 8,9 et 10 juillet. Retrouvez ici la programmation du festival, les artistes
        et toutes les informations nécessaires.
      </p>
      <div class="mt-9 flex flex-row justify-between">
        <h2 class="font-barlow text-2xl font-bold uppercase">Programmation</h2>
        <RouterLink to="/prog">
          <ButtonBlue />
        </RouterLink>
      </div>
      <p class="mt-6 font-barlow text-sm font-normal">
        Retrouvez sur le site la programmation des différents concerts qui auront lieu pendant les trois jours du festival.
      </p>
      <div class="mt-9 flex flex-row justify-between">
        <h2 class="font-barlow text-2xl font-bold uppercase">Artistes</h2>
        <RouterLink to="/artistes">
          <ButtonRed />
        </RouterLink>
      </div>
      <p class="mt-6 font-barlow text-sm font-normal">
        Retrouvez la liste de vos artistes préférés qui seront présents pour le festival Blend Up et découvrez les têtes daffiche de la
        nouvelle génération.
      </p>
    </div>
  </main>
</template>

<script>
import ButtonBlue from "../components/icon/ButtonBlue.vue";
import ButtonRed from "../components/icon/ButtonRed.vue";
export default { components: { ButtonBlue, ButtonRed } };
</script>