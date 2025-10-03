import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDM4AjX_JFAfLP4aQ9KWC-gv9V3P6xFjvM",
  authDomain: "bhakthipath.firebaseapp.com",
  projectId: "bhakthipath",
  storageBucket: "bhakthipath.firebasestorage.app",
  messagingSenderId: "517257990621",
  appId: "1:517257990621:web:293dffeb0f7dda8b23e634"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
