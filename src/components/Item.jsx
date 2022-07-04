import React from "react";

const itemStyle = {
  backgroundColor: "pink",
};

export default function Item({ elem }) {
  return (
    <div style={itemStyle}>
      <h1>Pastel: {elem.nombre}</h1>
      <h2>Precio: {elem.precio}</h2>
      <h2>Stock: {elem.stock}</h2>
    </div>
  );
}