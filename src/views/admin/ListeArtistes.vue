<template>
  <main class="mx-6 sm:mx-32 md:mx-44 md:mb-20 md:mt-6 lg:m-0 lg:grid lg:grid-cols-6">
    <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase lg:col-span-full">Liste des Artistes</h1>
    <div class="col-span-1"></div>
    <table class="col-span-4 mt-10 w-full">
      <thead>
        <tr>
          <th
            colspan="3"
            class="relative bg-gray-300 py-2 text-center font-barlow text-2xl font-bold uppercase dark:bg-gray-700 lg:col-span-full"
          >
            Liste des artistes
            <span>
              <router-link to="/createArtiste"><img src="/Icon/add.png" alt="ajouter" class="absolute top-2.5 right-3 w-7" /> </router-link>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="bg-gray-200 text-center font-barlow text-xl font-bold uppercase dark:bg-gray-500 lg:col-span-full">Image</td>
          <td class="bg-gray-200 text-center font-barlow text-xl font-bold uppercase dark:bg-gray-500 lg:col-span-full">Nom</td>
          <td class="bg-gray-200 text-center font-barlow text-xl font-bold uppercase dark:bg-gray-500 lg:col-span-full">Actions</td>
        </tr>
        <tr v-for="artiste in listeArtistes" :key="artiste.id">
          <td><img :src="artiste.img" :alt="artiste.nom" class="mx-auto h-36 w-56 object-cover py-4" /></td>
          <td class="text-center">{{ artiste.nom }}</td>
          <td>
            <div class="flex flex-row justify-center gap-4">
              <router-link :to="{ name: 'UpdateArtiste', params: { id: artiste.id } }"
                ><img src="/Icon/update.png" alt="modifier" class="w-5"
              /></router-link>
              <router-link :to="{ name: 'DeleteArtiste', params: { id: artiste.id } }"
                ><img src="/Icon/delete.png" alt="supprimer" class="w-6"
              /></router-link>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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