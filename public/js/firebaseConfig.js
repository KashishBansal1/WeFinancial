const firebaseConfig = {
  apiKey: "AIzaSyBPVEwIfheqlox3MgbvRl581iz3xJ8xpV0",
  authDomain: "wefinancial-ffb80.firebaseapp.com",
  projectId: "wefinancial-ffb80",
  storageBucket: "wefinancial-ffb80.appspot.com",
  messagingSenderId: "88433198481",
  appId: "1:88433198481:web:541a98c278be0a56ac0630",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
var docRef = db.collection("users");
var messageRef = db.collection("contacts");
