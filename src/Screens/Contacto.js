import React from "react";
import styles from "./Contacto.module.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div className={styles.contacto}>
      <div className={styles.title}>Información de contacto</div>
      <div className={styles.contenedor}>
        <div className={styles.contizq}>
          ¿Deseas algún producto en particular o alguna asistencia
          especializada?
        </div>
        <div className={styles.cel}>
          <p>Celular: 55-85-95-19-34</p>
        </div>
      </div>
      <div className={styles.logo}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>
      <Link to="/carrito">
        <div className={styles.carrito}>CARRITO DE COMPRA</div>
      </Link>
    </div>
  );
};

export default Contacto;
