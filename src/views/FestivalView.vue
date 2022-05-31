<template>
  <main class="mx-6 bg-gray-100 sm:mx-32 md:mx-44 md:mt-6 lg:m-0 lg:grid lg:grid-cols-6">
    <div class="col-span-2"></div>
    <div class="col-span-2">
      <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase">Blend Up</h1>
      <h2 class="mt-6 font-barlow text-2xl font-bold uppercase">À propos du festival</h2>
      <p class="mt-6 font-barlow text-sm font-normal">
        Blend Up, ce nom évoque le mélange, valeur centrale du festival, et fait référence aux différents styles et culture de rap qui
        seront présents.
      </p>
      <p class="mt-6 font-barlow text-sm font-normal">
        Ce festival cherche à créer une véritable ambiance rap interculturelle en invitant des artistes hip hop de tous horizons.
      </p>
      <h2 class="mt-6 font-barlow text-2xl font-bold uppercase">À propos du festival</h2>
      <!-- <div
        class="
          grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
          gap-x-5
          md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
          lg:grid-cols-[repeat(auto-fit,minmax(224px,1fr))]
        "
      >
        <img src="/Gallerie/1.jpg" alt="photo du festival" class="mt-6 sm:w-full" />
        <img src="/Gallerie/2.jpg" alt="photo du festival" class="mt-6 sm:w-full" />
        <img src="/Gallerie/3.jpg" alt="photo du festival" class="mt-6 sm:w-full" />
        <img src="/Gallerie/5.jpg" alt="photo du festival" class="mt-6 sm:w-full" />
        <img src="/Gallerie/4.jpg" alt="photo du festival" class="mt-6 sm:w-full" />
      </div> -->
      <div class="mt-6 flex flex-col gap-5 sm:flex-row">
        <div class="flex flex-col gap-5">
          <img v-for="photo in oddNumbers" :key="photo.id" :src="photo.img" alt="photo du festival" class="sm:w-full" />
        </div>
        <div class="flex flex-col gap-5">
          <img v-for="photo in evenNumbers" :key="photo.id" :src="photo.img" alt="photo du festival" class="sm:w-full" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: {},
  data() {
    return {
      listePhotos: [],
    };
  },
  mounted() {
    this.getPhoto();
  },
  methods: {
    async getPhoto() {
      const firestore = getFirestore();
      const dbphoto = collection(firestore, "photos");
      await onSnapshot(dbphoto, (snapshot) => {
        this.listePhotos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listePhotos.forEach(function (it) {
          const storage = getStorage();
          const dbphotoimg = ref(storage, "photos/" + it.img);
          getDownloadURL(dbphotoimg)
            .then((url) => {
              it.img = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
        console.log(this.listePhotos);
      });
    },
  },
  computed: {
    evenNumbers: function () {
      return this.listePhotos.filter(function (photo) {
        return photo.id % 2 === 0;
      });
    },
    oddNumbers: function () {
      return this.listePhotos.filter(function (photo) {
        return photo.id % 2 === 1;
      });
    },
  },
};
</script>