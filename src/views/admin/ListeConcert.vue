<template>
  <main class="mx-6 mb-40 bg-gray-100 sm:mx-32 md:mx-44 md:mb-20 md:mt-6 lg:m-0 lg:mb-28 lg:grid lg:grid-cols-6">
    <h1 class="mt-6 text-center font-barlow text-3xl font-bold uppercase lg:col-span-full">Liste des Artistes</h1>
    <div class="col-span-1"></div>
    <form class="col-span-4 mt-10">
      <div class="flex flex-row">
        <input type="text" class="w-full border-[1px] border-gray-400 pl-2" placeholder="N° de session" v-model="session" required />
        <input type="text" class="w-full border-[1px] border-gray-400 pl-2" placeholder="Horaire" v-model="horaire" required />
        <button class="w-full bg-gray-900 p-2 font-barlow text-xl font-bold uppercase text-gray-100" @click="createConcert()" type="button">
          Ajouter
        </button>
      </div>
    </form>
    <div class="col-span-1"></div>
    <div class="col-span-1"></div>

    <table class="col-span-4 mb-12 mt-10 w-full">
      <thead>
        <tr>
          <th colspan="3" class="relative bg-gray-300 py-2 text-center font-barlow text-2xl font-bold uppercase lg:col-span-full">
            Liste des Co
            <span>
              <router-link to="/createArtiste"><img src="/Icon/add.png" alt="ajouter" class="absolute top-2.5 right-3 w-7" /> </router-link>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="bg-gray-200 text-center font-barlow text-xl font-bold uppercase lg:col-span-full">Session</td>
          <td class="bg-gray-200 text-center font-barlow text-xl font-bold uppercase lg:col-span-full">Horaire</td>
          <td class="bg-gray-200 text-center font-barlow text-xl font-bold uppercase lg:col-span-full">Actions</td>
        </tr>
        <tr v-for="concert in listeConcert" :key="concert.id">
          <td class="text-center"><input type="text" name="session" v-model="concert.session" required class="w-full pl-2" /></td>
          <td class="text-center"><input type="text" name="horaire" v-model="concert.horaire" required class="w-full pl-2" /></td>
          <td>
            <div class="flex flex-row justify-center gap-4">
              <button type="button" @click="updateConcert(concert)"><img src="/Icon/update.png" alt="modifier" class="w-6" /></button>
              <button type="button" @click="deleteConcert(concert)"><img src="/Icon/delete.png" alt="supprimer" class="w-6" /></button>
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
      listeConcert: [],
      session: null,
      horaire: null,
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
    async createConcert() {
      const firestore = getFirestore();
      const dbconcert = collection(firestore, "concert");
      const docRef = await addDoc(dbconcert, {
        session: this.session,
        horaire: this.horaire,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updateConcert(concert) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "concert", concert.id);
      await updateDoc(docRef, {
        session: concert.session,
        horaire: concert.horaire,
      });
    },

    async deleteConcert(concert) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "concert", concert.id);
      await deleteDoc(docRef);
    },
  },
};
</script>