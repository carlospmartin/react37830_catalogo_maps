import React from "react";
import Item from "./Item";


export default function ItemList({ cakes }) {
  return (
    <div>
      {cakes.map((elem) => {
        return <Item elem={elem} />;
      })}
    </div>
  );
}

