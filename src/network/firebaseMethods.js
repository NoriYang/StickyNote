import { db, auth } from './firebaseConfig'
import {
  signOut,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  updateProfile,
} from "firebase/auth";
import { doc, addDoc, getDocs, collection, updateDoc, deleteDoc } from "firebase/firestore";

async function loginEmail(email, password) {
  return await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      return {
        status: true,
      }
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      return {
        status: false,
        message: errorMessage
      }
    });
}
export const guestLogin = async () => {
  return await setPersistence(auth, browserSessionPersistence).then(() => {
    return loginEmail('guest007@gmail.com', '123456789');
  })
}
// 登入並使用 Session 機制 
export const login = async (email, password) => {
  return await setPersistence(auth, browserSessionPersistence).then(() => {
    return loginEmail(email, password);
  })
}
// 登出
export const userLogout = async () => {
  signOut(auth)
}

// 更新使用者暱稱
export const updateDisplayName = async (newName) => {
  await updateProfile(auth.currentUser, {
    displayName: newName
  })
}

export const getNotes = async () => {
  const querySnapshot = await getDocs(collection(db, "user", auth.currentUser.uid, 'notes'));
  let noteData = [];
  querySnapshot.forEach((doc) => {
    let payload = {
      firebaseID: doc.id,
      ...doc.data(),
    }
    noteData.push(payload);
  });
  return noteData
}

export const addNote = async (payload) => {
  const docRef = await addDoc(collection(db, "user", auth.currentUser.uid, 'notes'), payload);
  return docRef.id
}

export const updateNoteStatus = async (firebaseID, status) => {
  const Ref = doc(db, "user", auth.currentUser.uid, 'notes', firebaseID);
  await updateDoc(Ref, {
    status: status,
  });
}

export const updateNote = async (firebaseID, payload) => {
  const Ref = doc(db, "user", auth.currentUser.uid, 'notes', firebaseID)
  updateDoc(Ref, payload);
}

export const delNote = async (firebaseID) => {
  const docRef = doc(db, 'user', auth.currentUser.uid, 'notes', firebaseID)
  await deleteDoc(docRef);
}