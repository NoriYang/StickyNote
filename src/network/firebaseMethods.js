import { db, auth } from './firebaseConfig'
import {
  signOut,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  updateProfile,
} from "firebase/auth";
import { doc, addDoc, getDocs, collection, updateDoc } from "firebase/firestore";

async function loginEmail(email, password) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(userCredential, user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}

// 登入並使用 Session 機制 
export const login = (email, password) => {
  setPersistence(auth, browserSessionPersistence).then(async () => {
    await loginEmail(email, password);
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
  const querySnapshot = await getDocs(collection(db, "notes"));
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
  const docRef = await addDoc(collection(db, "notes"), payload);
  return docRef.id
}

export const updateNoteStatus = async (firebaseID, status) => {
  const Ref = doc(db, "notes", firebaseID);
  await updateDoc(Ref, {
    status: status,
  });
}

export const updateNote = async (firebaseID, payload) => {
  const Ref = doc(db, "notes", firebaseID)
  updateDoc(Ref, payload);
}
