import React from "react";
import styles from "./Productos.module.css";
import img from "../Assets/img.png";
import { Link } from "react-router-dom";

// Ejemplo de datos de productos
export const productosData = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion1: "Descripción del Producto 1",
    descripcion2: "Descripción del Producto más detallada 1.2",
    imagen: img,
    precio: "90",
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion1: "Descripción del Producto 2",
    descripcion2: "Descripción del Producto más detallada 2.2",
    imagen: img,
    precio: "90",
  },
  {
    id: 3,
    nombre: "Producto 3",
    descripcion1: "Descripción del Producto 3",
    descripcion2: "Descripción del Producto más detallada 3.2",
    imagen: img,
    precio: "90",
  },
  {
    id: 4,
    nombre: "Producto 4",
    descripcion1: "Descripción del Producto 4",
    descripcion2: "Descripción del Producto más detallada 4.2",
    imagen: img,
    precio: "90",
  },
  {
    id: 5,
    nombre: "Producto 5",
    descripcion1: "Descripción del Producto 5",
    descripcion2: "Descripción del Producto más detallada 5.2",
    imagen: img,
    precio: "90",
  },
  {
    id: 6,
    nombre: "Producto 6",
    descripcion1: "Descripción del Producto 6",
    descripcion2: "Descripción del Producto más detallada 6.2",
    imagen: img,
    precio: "90",
  },
  {
    id: 7,
    nombre: "Producto 7",
    descripcion1: "Descripción del Producto 7",
    descripcion2: "Descripción del Producto más detallada 7.2",
    imagen: img,
    precio: "90",
  },
  {
    id: 8,
    nombre: "Producto 8",
    descripcion1: "Descripción del Producto 8",
    descripcion2: "Descripción del Producto más detallada 8.2",
    imagen: img,
    precio: "90",
  },
  {
    id: 9,
    nombre: "Producto 9",
    descripcion1: "Descripción del Producto 9",
    descripcion2: "Descripción del Producto más detallada 9.2",
    imagen: img,
    precio: "90",
  },
];

const Productos = () => {
  return (
    <div className={styles.productos}>
      <div className={styles.title}>Productos</div>
      <div className={styles.catalogo}>
        {productosData.map((producto) => (
          <Link
            to={`/producto/${producto.id}`}
            key={producto.id}
            className={styles.tarjetaLink}
          >
            <div className={styles.tarjeta}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className={styles.imagen}
              />
              <div className={styles.nombre}>{producto.nombre}</div>
              <div className={styles.descripcion}>{producto.descripcion1}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Productos;
