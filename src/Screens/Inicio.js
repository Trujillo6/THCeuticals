import React from "react";
import styles from "./Inicio.module.css";
import logo from "../Assets/logo.png";
import carro from "../Assets/Carro_compras.svg";
import Thceuticals from "./Thceuticals"; // Importa Thceuticals correctamente
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className={styles.inicio}>
      <div className={styles.background}>
        <div className={styles.afueralogo}>
          <img className={styles.logo} src={logo} alt="Logo" />
        </div>
        <div className={styles.afueracarro}>
          <Link to="/otra-pagina">
            <img className={styles.carro} src={carro} alt="Carro" />
          </Link>
        </div>
      </div>
      <Thceuticals />
    </div>
  );
};

export default Inicio;
