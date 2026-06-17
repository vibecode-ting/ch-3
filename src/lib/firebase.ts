import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYo7LEhWlNPTkpoS65x0gf0EDq5sw1jVc",
  authDomain: "ting-51902.firebaseapp.com",
  projectId: "ting-51902",
  storageBucket: "ting-51902.firebasestorage.app",
  messagingSenderId: "1029883464067",
  appId: "1:1029883464067:web:c206751c630f1f4a8c4eb6",
  measurementId: "G-ZTVB76MM6W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default app;
