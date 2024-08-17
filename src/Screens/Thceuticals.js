import React from "react";
import styles from "./Thceuticals.module.css";

const Thceuticals = () => {
  return (
    <div className={styles.thceuticals}>
      <div className={styles.ask}>¿Quienes somos?</div>
      <div className={styles.title}>THCeuticals</div>
      <div className={styles.contenedor}>
        <div className={styles.contizq}>
          <p>
            THCeuticals es una empresa que se especializa en la oferta de
            productos y servicios relacionados con el CBD y el THC. Estos
            compuestos son conocidos por sus propiedades terapéuticas y se
            extraen de la planta de cannabis. Los productos de THCeuticals
            pueden incluir estos compuestos si el cliente lo desea o lo
            necesita.
          </p>
        </div>
        <div className={styles.contder}>
          <p>
            THCeuticals es una empresa que combina la ciencia moderna con los
            beneficios naturales del CBD y el THC para ofrecer productos y
            servicios que mejoran la salud y el bienestar de sus clientes.
            Recuerda siempre consultar a un profesional de la salud antes de
            comenzar cualquier tratamiento nuevo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thceuticals;
