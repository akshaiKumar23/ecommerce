import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDxr_EkfW3YgrPn-dJo4e17NY8VXSnvm2w",
  authDomain: "ecommerce-b0597.firebaseapp.com",
  projectId: "ecommerce-b0597",
  storageBucket: "ecommerce-b0597.appspot.com",
  messagingSenderId: "815212598764",
  appId: "1:815212598764:web:ca5599e111fc7731199cc9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
