import { getFireStore } from "./index";

export const getCollection = (collectionName) => {
  let data;
  const db = getFireStore();
  const itemCollection = db.collection(collectionName);
  itemCollection
    .get()
    .then((querySnapshot) => {
      querySnapshot.docs.map((doc) => doc.data());
    })
    .catch((error) => console.log("Firestore error:", error));

  return data;
};
