// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOqkUT-LmAYTqmEPT3na6mV29iRJWh0vs",
  authDomain: "shoppe-livre.firebaseapp.com",
  projectId: "shoppe-livre",
  storageBucket: "shoppe-livre.firebasestorage.app",
  messagingSenderId: "234531926019",
  appId: "1:234531926019:web:c271cab13011a6cc395e36",
  measurementId: "G-FDT2NLHQQR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);