import React, { useEffect, useState } from "react";
import cakes from "../data";
import ItemList from "./ItemList";

const promesa = new Promise((res, rej) => {
  setTimeout(() => {
    res(cakes);
  }, 2000);
});

export default function ItemListContainer() {
  const [cakeList, setCakeList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    promesa.then((response) => {
      setLoading(false);
      setCakeList(response);
    });
  }, []);

  if (loading) {
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );
  }
  return (
    <div>
      <ItemList cakes={cakeList} />
    </div>
  );
}