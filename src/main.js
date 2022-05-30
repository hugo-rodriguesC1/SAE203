import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaRDjIV8HlG8LJvLbJp5VPnytC4tLy_-E",
    authDomain: "sae203-a4b0d.firebaseapp.com",
    projectId: "sae203-a4b0d",
    storageBucket: "sae203-a4b0d.appspot.com",
    messagingSenderId: "102358983317",
    appId: "1:102358983317:web:48299041fecf19b1a8319c"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);



const app = createApp(App)

app.use(router)

app.mount('#app')
