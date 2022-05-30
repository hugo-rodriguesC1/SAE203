<template>
  <main class="mx-6 bg-gray-100 sm:mx-32 md:mx-44 md:mb-20 md:mt-6 lg:m-0 lg:grid lg:grid-cols-6">
    <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase lg:col-span-full">Artistes</h1>
    <div class="col-span-1"></div>
    <div
      class="
        mt-9
        grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(140px,1fr))]
        gap-x-11 gap-y-7
        sm:grid-cols-[repeat(auto-fit,minmax(100px,1fr))]
        md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:gap-5
        lg:col-span-4
      "
    >
      <div v-for="artiste in listeArtistes" :key="artiste.id" class="flex flex-col items-center">
        <img :src="artiste.img" :alt="artiste.nom" />
        <h2 class="font-barlow text-xl font-bold uppercase">{{ artiste.nom }}</h2>
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
      listeArtistes: [],
    };
  },
  mounted() {
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      const firestore = getFirestore();
      const dbartiste = collection(firestore, "artistes");
      await onSnapshot(dbartiste, (snapshot) => {
        this.listeArtistes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtistes.forEach(function (it) {
          const storage = getStorage();
          const dbartisteimg = ref(storage, "artistes/" + it.img);
          getDownloadURL(dbartisteimg)
            .then((url) => {
              it.img = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
  },
};
</script>