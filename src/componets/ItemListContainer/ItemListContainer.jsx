import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import CustomSelect from "../CustomSelect/CustomSelect";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    (async () => {
      const db = getFirestore();
      const docsRef = collection(db, "productos");
      const querySnapshop = await getDocs(docsRef);
      setProductos(
        querySnapshop.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    })();
  }, []);

  const handleCategorySelected = (value) => {
    (async () => {
      const db = getFirestore();
      const docsRef = collection(db, "productos");
      if (value === "categorias") {
        const docsRef = collection(db, "productos");
        const querySnapshop = await getDocs(docsRef);
        setProductos(
          querySnapshop.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        return;
      }
      const q = query(docsRef, where("categoria", "==", value));
      const querySnapshop = await getDocs(q);
      setProductos(
        querySnapshop.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    })();
  };
  return (
    <>
      <CustomSelect
        handleCategorySelected={handleCategorySelected}
        categorias={[
          { id: 1, nombre: "Tourer" },
          { id: 2, nombre: "Enduro" },
          { id: 3, nombre: "Maxi scooter" },
          { id: 4, nombre: "Deportivas" },
        ]}
      />
      <div className="cardcontainer">
        {productos.map((producto) => (
          <ItemList key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
