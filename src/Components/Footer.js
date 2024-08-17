import React from "react";
import styles from "./Footer.module.css";
import face from "../Assets/facebook.svg";
import insta from "../Assets/instagram.svg";
import whats from "../Assets/whatsapp.svg";

const Footer = () => {
  return (
    <div className={styles.fondo}>
      <div className={styles.footer}>
        <a
          href="https://www.facebook.com/JDSpaMX?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.face} src={face} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/jdspa.mx?igsh=dWljaHE2NG9vcmph"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.insta} src={insta} alt="Instagram" />
        </a>
        <a
          href="https://wa.me/5523797688"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.whats} src={whats} alt="Whatsapp" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
