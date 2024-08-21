// ProductoDetalle.js
import React from "react";
import { useParams } from "react-router-dom";
import { productosData } from "./Productos"; // Asegúrate de que la ruta sea correcta
import styles from "./Productodetalle.module.css";

const ProductoDetalle = () => {
  const { id } = useParams();
  const producto = productosData.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className={styles.detalle}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className={styles.imagen}
      />
      <h1 className={styles.nombre}>{producto.nombre}</h1>
      <p className={styles.descripcion}>{producto.descripcion2}</p>
      <p className={styles.precio}>Precio: ${producto.precio} mxn</p>
    </div>
  );
};

export default ProductoDetalle;
