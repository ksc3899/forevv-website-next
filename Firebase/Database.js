import { db } from "./Firebase";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  arrayUnion,
  arrayRemove,
  getDocs,
  deleteDoc,
  query,
  collectionGroup,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();
export async function uploadMedia(contact) {
  try {
    const selectedFile = document.getElementById("input").files[0];
    const mediaRef = ref(storage, `images/${contact}`);
    return uploadBytes(mediaRef, selectedFile).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        return downloadURL;
      });
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function addEarlyAccessDetails(name, contact, email) {
  try {
    const docRef = await setDoc(
      doc(db, "earlyAccess", contact),
      {
        Name: name,
        ContactNum: contact,
        Email: email,
      },
      { merge: true }
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function addContestDetails(
  firstName,
  lastName,
  primaryContact,
  secondaryContact,
  email,
  instagram,
  media,
  story
) {
  try {
    const docRef = await setDoc(
      doc(db, "contest", primaryContact),
      {
        firstName: firstName,
        lastName: lastName,
        primaryContactNum: primaryContact,
        secondaryContactNum: secondaryContact,
        email: email,
        instagram: instagram,
        media: media,
        story: story,
      },
      { merge: true }
    );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getData() {
  try {
    const querySnapshot = await getDocs(collection(db, "earlyAccess"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
