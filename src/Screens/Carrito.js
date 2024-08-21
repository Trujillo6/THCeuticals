import React, { useContext } from "react";
import { CartContext } from "../Screens/CartContext";
import styles from "./Carrito.module.css";
import { Link } from "react-router-dom";
import carritoVacioImg from "../Assets/carritoblanco.svg"; // Reemplaza con la ruta de la imagen

const Carrito = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  if (cart.length === 0) {
    return (
      <div className={styles.carritoVacio}>
        <p>Tu carrito está vacío</p>
        <img
          src={carritoVacioImg}
          alt="Carrito vacío"
          className={styles.carritoImg}
        />
        <Link to="/productos">
          <button className={styles.irProductos}>Agregar Productos</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.carrito}>
      <h2>Tu Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id} className={styles.itemCarrito}>
          <img src={item.imagen} alt={item.nombre} className={styles.imagen} />
          <div className={styles.detalles}>
            <p>{item.nombre}</p>
            <p>Precio: ${item.precio} MXN</p>
            <input
              type="number"
              value={item.cantidad}
              min="1"
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            />
            <button
              onClick={() => removeFromCart(item.id)}
              className={styles.botonEliminar}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <h3>Total a pagar: ${calcularTotal()} MXN</h3>
    </div>
  );
};

export default Carrito;
