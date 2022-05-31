<template>
  <main class="mx-6 sm:mx-32 sm:mb-56 md:mx-44 md:mt-6 lg:m-0 lg:grid lg:grid-cols-6">
    <div class="col-span-1"></div>
    <div class="col-span-4 lg:mx-16">
      <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase">Programmation</h1>
      <div class="flex flex-grow flex-col">
        <h2 class="mt-6 font-barlow text-2xl font-bold uppercase">Vendredi</h2>
        <div class="mt-4 overflow-x-scroll">
          <div class="flex h-32 w-[410px] flex-row gap-5 sm:w-full md:h-48">
            <ConcertCard
              v-for="concert in listeConcert"
              :key="concert.id"
              blue="400"
              :horaire="concert.horaire"
              :session="concert.session"
            />
          </div>
        </div>
        <h2 class="mt-9 font-barlow text-2xl font-bold uppercase">Samedi</h2>
        <div class="mt-4 overflow-x-scroll">
          <div class="flex h-32 w-[410px] flex-row gap-5 sm:w-full md:h-48">
            <ConcertCard
              v-for="concert in listeConcert"
              :key="concert.id"
              blue="600"
              :horaire="concert.horaire"
              :session="concert.session"
            />
          </div>
        </div>
        <h2 class="mt-9 font-barlow text-2xl font-bold uppercase">Dimanche</h2>
        <div class="mt-4 overflow-x-scroll">
          <div class="flex h-32 w-[410px] flex-row gap-5 sm:w-full md:h-48">
            <ConcertCard
              v-for="concert in listeConcert"
              :key="concert.id"
              blue="800"
              :horaire="concert.horaire"
              :session="concert.session"
            />
          </div>
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

import ConcertCard from "../components/ConcertCard.vue";
export default {
  components: { ConcertCard },
  data() {
    return {
      listeConcert: [],
    };
  },
  mounted() {
    this.getConcert();
  },
  methods: {
    async getConcert() {
      const firestore = getFirestore();
      const dbConcert = collection(firestore, "concert");
      const q = query(dbConcert, orderBy("session"));

      await onSnapshot(q, (snapshot) => {
        this.listeConcert = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
      console.log(this.listeConcert);
    },
  },
};
</script>