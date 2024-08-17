import React from "react";
import styles from "./Contacto.module.css";
import logo from "../Assets/logo.png";

const Contacto = () => {
  return (
    <div className={styles.contacto}>
      <div className={styles.title}>Contacto</div>
      <div className={styles.contenedor}>
        <div className={styles.contizq}>
          <p>
            ¿Deseas algún producto <br /> en particular?
          </p>
        </div>
        <div className={styles.cel}>
          <p>Celular: 55-85-95-19-34</p>
        </div>
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Contacto;
