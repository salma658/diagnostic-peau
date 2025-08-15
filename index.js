// Import des fonctions Firebase pour Node
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB_SdVr7xPVzDz0JpAIQSBiI9xwLi71VDY",
  authDomain: "diagnostic-peau.firebaseapp.com",
  projectId: "diagnostic-peau",
  storageBucket: "diagnostic-peau.firebasestorage.app",
  messagingSenderId: "814182259117",
  appId: "1:814182259117:web:f699fea75289f00581a924",
  measurementId: "G-8JMRHYSBL9"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fonction d'ajout
async function addDiagnostic() {
  const userId = "user123";
  const diagnosticId = "diag001";

  try {
    await setDoc(doc(db, "users", userId, "diagnostics", diagnosticId), {
      diagnosticPhotoUrl: "https://storage.example.com/photo1.jpg",
      scores: {
        hydration: 85,
        oiliness: 40,
        redness: 20,
        wrinkles: 55,
        spots: 35
      },
      createdAt: new Date().toISOString(),
      recommendedProductBarcode: "1234567890123",
      createdBy: userId,
      targetPerson: null
    });

    console.log("✅ Diagnostic ajouté !");
  } catch (error) {
    console.error("❌ Erreur lors de l'ajout :", error);
  }
}

addDiagnostic();
