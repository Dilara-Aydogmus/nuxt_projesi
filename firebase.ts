import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid"; // Benzersiz ID'ler için

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyChnQN9QX9jcuLEQ1ewQqWdEiel2Jt-5GI",
  authDomain: "nuxt-proje2.firebaseapp.com",
  projectId: "nuxt-proje2",
  storageBucket: "nuxt-proje2.appspot.com",
  messagingSenderId: "1058376311425",
  appId: "1:1058376311425:web:5ad56a1a7db4cbfda56380",
};

// Firebase App Başlatma (Tekrar Eden Başlatmaları Önler)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Kullanıcı Kaydetme
export const saveUserToFirebase = async (
  nameSurname: string,
  email: string,
  phoneNumber: string
) => {
  try {
    const userId = uuidv4(); // Benzersiz bir userId oluştur
    const userRef = doc(db, "users", userId);

    await setDoc(userRef, {
      userId,
      nameSurname,
      email,
      phoneNumber,
    });

    console.log("Kullanıcı başarıyla kaydedildi:", { userId, nameSurname });
    return userId; // Gerekirse kaydedilen userId'yi döndür
  } catch (error) {
    console.error("Kullanıcı kaydedilirken hata oluştu:", error);
    throw error;
  }
};

// Kullanıcıyı Al
export const getUser = async (userId: string) => {
    try {
      console.log("Alınan userId:", userId);
  
      const userRef = doc(db, "users", userId);
      console.log("Belge referansı oluşturuldu:", userRef);
  
      const userSnap = await getDoc(userRef);
      console.log("Belge yanıtı:", userSnap);
  
      if (userSnap.exists()) {
        console.log("Kullanıcı bulundu:", userSnap.data());
        return userSnap.data();
      } else {
        console.error("Bu userId için kullanıcı bulunamadı:", userId);
        return null;
      }
    } catch (error) {
      console.error("Kullanıcı alınırken hata oluştu:", error);
      throw error;
    }
  };

// Kullanıcı Güncelle
export const updateUser = async (
  userId: string,
  nameSurname?: string,
  email?: string,
  phoneNumber?: string
) => {
  try {
    const userRef = doc(db, "users", userId);

    const updateData: Partial<{
      nameSurname: string;
      email: string;
      phoneNumber: string;
    }> = {};

    if (nameSurname) updateData.nameSurname = nameSurname;
    if (email) updateData.email = email;
    if (phoneNumber) updateData.phoneNumber = phoneNumber;

    if (Object.keys(updateData).length > 0) {
      await updateDoc(userRef, updateData);
      console.log("Kullanıcı başarıyla güncellendi:", updateData);
    } else {
      console.log("Güncellenecek bir alan bulunamadı.");
    }
  } catch (error) {
    console.error("Kullanıcı güncellenirken hata oluştu:", error);
    throw error;
  }
};

// Sepeti Kaydetme
export const saveCartToFirebase = async (
  cartItems: Array<{ id: number; name: string; price: number; image: string }>
) => {
  try {
    if (!cartItems || cartItems.length === 0) {
      console.error("Kaydedilecek ürün yok.");
      return;
    }

    const userCartDocRef = doc(db, "cart", "userCart");
    await setDoc(userCartDocRef, { cartItems });

    console.log("Sepet başarıyla kaydedildi:", cartItems);
  } catch (error) {
    console.error("Sepet kaydedilirken hata oluştu:", error);
    throw error;
  }
};

// Export
export { app, db };
