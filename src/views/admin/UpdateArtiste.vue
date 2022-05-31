<template>
  <main class="mx-6 sm:mx-32 md:mx-44 md:mt-6 lg:mx-64 lg:grid lg:grid-cols-2 lg:gap-40">
    <img :src="imageData" class="mx-auto mt-6 md:w-full" />
    <form @submit.prevent="updateArtiste">
      <h1 class="mb-10 font-barlow text-2xl font-bold uppercase">Création d'un artiste</h1>
      <div class="mb-10 flex w-full">
        <div class="bg-gray-900 p-3 font-barlow text-xl font-bold uppercase text-gray-100">Nom</div>
        <input
          type="text"
          placeholder="Nom de l'artiste"
          class="w-full border-[1px] border-gray-400 bg-gray-100 p-2.5 font-barlow text-xl font-bold uppercase text-gray-900"
          v-model="artiste.nom"
          required
        />
      </div>
      <div class="mb-10 flex w-full">
        <div class="bg-gray-900 p-3 font-barlow text-xl font-bold uppercase text-gray-100">Bio</div>
        <input
          type="text"
          placeholder="Biographie"
          class="w-full border-[1px] border-gray-400 bg-gray-100 p-2.5 font-barlow text-xl font-bold uppercase text-gray-900"
          v-model="artiste.bio"
          required
        />
      </div>
      <div class="mb-10 flex w-full">
        <div class="bg-gray-900 p-3 font-barlow text-xl font-bold uppercase text-gray-100">Albums</div>
        <input
          type="text"
          placeholder="Albums notoires"
          class="w-full border-[1px] border-gray-400 bg-gray-100 p-2.5 font-barlow text-xl font-bold uppercase text-gray-900"
          v-model="artiste.alb"
          required
        />
      </div>
      <div class="w-full bg-gray-900 p-3 text-center font-barlow text-xl font-bold uppercase text-gray-100">Sélectionner une image</div>
      <input
        type="file"
        placeholder="Nom de l'artiste"
        class="mb-10 w-full border-[1px] border-gray-400 bg-gray-100 p-2.5 font-barlow text-xl font-bold uppercase text-gray-900"
        name="file"
        id="file"
        ref="file"
        @change="previewImage"
      />
      <div class="flex flex-row justify-between gap-5">
        <button type="submit" class="w-full bg-gray-900 p-3 font-barlow text-xl font-bold uppercase text-gray-100">Modifier</button>

        <button class="w-full bg-gray-900 p-3 font-barlow text-xl font-bold uppercase text-gray-100">
          <router-link to="/listea">Annuler</router-link>
        </button>
      </div>
    </form>
  </main>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  getDoc,
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
  deleteObject,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: {},
  data() {
    return {
      imageData: null,
      artiste: {
        img: null,
        nom: null,
        bio: null,
        alb: null,
      },
      refArtiste: null,
      imgModifiee: false,
      imageActuelle: null,
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.getArtiste(this.$route.params.id);
  },
  methods: {
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artiste.img = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    async getArtiste(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artistes", id);
      this.refArtiste = await getDoc(docRef);
      if (this.refArtiste.exists()) {
        this.artiste = this.refArtiste.data();
        this.imageActuelle = this.artiste.img;
      } else {
        this.console.log("artiste inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "artistes/" + this.artiste.img);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur dl", error);
        });
    },
    async updateArtiste() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "artistes/" + this.imageActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "artistes/" + this.artiste.img);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Upload a base64 string", this.artiste.img);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "artistes", this.$route.params.id), this.artiste);
      this.$router.push("/listea");
    },
  },
};
</script>