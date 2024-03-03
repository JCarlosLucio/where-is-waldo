import { useState, useEffect } from 'react';
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { firestore } from '../firebase/config';

function useFirestore(collectionPath) {
  const [docs, setDocs] = useState(null);

  useEffect(() => {
    const firestoreQuery = query(
      collection(firestore, collectionPath),
      orderBy('time', 'asc'),
      limit(10)
    );

    const unsub = onSnapshot(firestoreQuery, (snap) => {
      const documents = snap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      console.log(`Getting ${collectionPath}`);
      setDocs(documents);
    });

    return () => unsub();
  }, [collectionPath]);

  return [docs];
}

export default useFirestore;
