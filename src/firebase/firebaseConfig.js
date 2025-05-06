import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
// apiKey: "AIzaSyAHaYMT_jYnLqrPnKyUnI4ES8VzmMw_3Vg",
// authDomain: "mayurchildcarecenter.firebaseapp.com",
// projectId: "mayurchildcarecenter",
// storageBucket: "mayurchildcarecenter.firebasestorage.app",
// messagingSenderId: "118324665230",
// appId: "1:118324665230:web:c58231174106937808e2df",
apiKey: "AIzaSyCXhqSMWdIu0dKE-X0gQuP3ipIw6-Vg7VE",
  authDomain: "drvishnuagrawal-711c5.firebaseapp.com",
  projectId: "drvishnuagrawal-711c5",
  storageBucket: "drvishnuagrawal-711c5.firebasestorage.app",
  messagingSenderId: "617526622040",
  appId: "1:617526622040:web:7e485290f0261f1466572d",
};

// Initialize Firebase only if it hasn't been initialized already
let app;
let db;

if (typeof window !== 'undefined') {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  // Initialize Firestore with persistent local cache
  db = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager(),
    }),
  });

  // Initialize analytics only in client-side
  if (typeof window !== 'undefined') {
    getAnalytics(app);
  }
}

export { app, db };