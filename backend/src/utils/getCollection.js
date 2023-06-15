import { db } from "../plugins/firebase.js";
import { getDocs, collection } from "firebase/firestore";

const getCollection = async (collectionName = "") => {
  try {
    const items = [];

    const todosCollection = collection(db, collectionName);
    const snapshot = await getDocs(todosCollection);

    snapshot.forEach((doc) => {
      const item = {
        id: doc.id,
        ...doc.data(),
      };

      items.push(item);
    });

    return items;
  } catch (err) {
    throw new Error("An error has occurred: ", err);
  }
};

export default getCollection;
