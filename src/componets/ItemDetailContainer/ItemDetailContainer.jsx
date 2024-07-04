import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    (async () => {
      const db = getFirestore();
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);
      setProducto({ id: docSnap.id, ...docSnap.data() });
    })();
  }, [id]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
