import { useState, useEffect } from 'react';
import { firestore } from '../firebase/config';

function useFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(
    () => {
      const query = firestore
        .collection(collection)
        .orderBy('time', 'desc')
        .limit(10);

      const unsub = query.onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        console.log('getting docs', documents);
        setDocs(documents);
      });
      return () => unsub();
    },
    [collection]
  );

  return [docs];
}

export default useFirestore;
