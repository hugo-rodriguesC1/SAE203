<template>
  <main class="mx-6 sm:mx-32 md:mx-44 md:mt-6 md:mb-24 lg:m-0 lg:grid lg:grid-cols-6">
    <div class="col-span-2"></div>
    <div class="col-span-2">
      <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase">Contact</h1>
      <h2 class="mt-6 font-barlow text-2xl font-bold uppercase">Formulaire</h2>
      <form class="mt-6 flex flex-col items-start gap-4">
        <div class="flex w-full flex-col items-start gap-3">
          <label for="nom" class="font-barlow text-xl font-bold uppercase">Nom</label>
          <input type="text" name="nom" class="h-8 w-full border-[1px] border-solid border-gray-500 dark:text-gray-900" />
        </div>
        <div class="flex w-full flex-col items-start gap-3">
          <label for="mail" class="font-barlow text-xl font-bold uppercase">Mail</label>
          <input type="email" name="mail" class="h-8 w-full border-[1px] border-solid border-gray-500 dark:text-gray-900" />
        </div>
        <div class="flex w-full flex-col items-start gap-3">
          <label for="sujet" class="font-barlow text-xl font-bold uppercase">Sujet</label>
          <input type="text" name="sujet" class="h-8 w-full border-[1px] border-solid border-gray-500 dark:text-gray-900" />
        </div>
        <div class="flex w-full flex-col items-start gap-3">
          <label for="message" class="font-barlow text-xl font-bold uppercase">Message</label>
          <input type="text" name="message" class="h-28 w-full border-[1px] border-solid border-gray-500 dark:text-gray-900" />
        </div>
        <button type="submit" class="btn-form">Envoyer</button>
      </form>
      <h2 class="mt-6 font-barlow text-2xl font-bold uppercase">Carte</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12871.339192195583!2d2.2355899610272547!3d48.85741964449077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665b8c9802a53%3A0x9f0e27e1e9caf620!2sHippodrome%20ParisLongchamp!5e0!3m2!1sfr!2sfr!4v1653891257080!5m2!1sfr!2sfr"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="my-6 w-full md:h-80"
      ></iframe>
      <p class="mt-6 text-center font-barlow text-sm font-normal md:mb-10">
        Hippodrome Paris Longchamps <br />
        2 Rte des Tribunes, 75016 Paris
      </p>
    </div>
  </main>
</template>

<script>
export default {
  components: {},
};
</script>