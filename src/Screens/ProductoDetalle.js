import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { productosData } from "./Productos";
import styles from "./Productodetalle.module.css";
import { CartContext } from "../Screens/CartContext";

const ProductoDetalle = () => {
  const { id } = useParams();
  const producto = productosData.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [mensaje, setMensaje] = useState(""); // Estado para controlar el mensaje

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    addToCart(producto);
    setMensaje("Agregado al carrito exitosamente"); // Muestra el mensaje
    setTimeout(() => setMensaje(""), 2000); // Oculta el mensaje después de 3 segundos
  };

  return (
    <div className={styles.detalle}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className={styles.imagen}
      />
      <h1 className={styles.nombre}>{producto.nombre}</h1>
      <p className={styles.descripcion}>{producto.descripcion2}</p>
      <p className={styles.precio}>Precio: ${producto.precio} MXN</p>
      <button onClick={handleAddToCart} className={styles.carrito}>
        Agregar al carrito
      </button>
      {mensaje && <p className={styles.mensaje}>{mensaje}</p>}{" "}
      {/* Muestra el mensaje */}
    </div>
  );
};

export default ProductoDetalle;
