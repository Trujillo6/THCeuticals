import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { MdOutlineMenu } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import carritoImg from "../Assets/Carro_compras.svg"; // Reemplaza con la ruta correcta de tu imagen

const Navbar = () => {
  const [NavbarOpen, setNavbarOpen] = useState(false);
  const [WindowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    WindowDimension.width > 800 && setNavbarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [WindowDimension]);

  const links = [
    { id: 1, link: "/", text: "INICIO" },
    { id: 2, link: "/productos", text: "PRODUCTOS" },
    { id: 3, link: "/contacto", text: "CONTACTO" },
    { id: 4, link: "/alex-rios", text: "ALEX RIOS" },
  ];

  return (
    <div className={styles.fondo}>
      <div className={styles.wrapper}>
        <div className={!NavbarOpen ? styles.Navbar : styles.NavOpen}>
          {!NavbarOpen && WindowDimension.width < 800 ? (
            <MdOutlineMenu
              onClick={() => setNavbarOpen(!NavbarOpen)}
              color="#000000"
              size={25}
            />
          ) : (
            WindowDimension.width < 800 && (
              <FaWindowClose
                onClick={() => setNavbarOpen(!NavbarOpen)}
                color="#000000"
                size={25}
              />
            )
          )}

          {NavbarOpen && (
            <ul className={styles.linksContainer}>
              {links.map((x) => (
                <div key={x.id}>
                  <Link
                    onClick={() => setNavbarOpen(false)}
                    to={x.link}
                    smooth
                    duration={500}
                    className={styles.navlink}
                  >
                    {x.text}
                  </Link>
                  <div className={styles.border}></div>
                </div>
              ))}
            </ul>
          )}

          {WindowDimension.width > 800 && (
            <ul className={styles.linksContainer}>
              {links.map((x) => (
                <div key={x.id}>
                  <Link
                    onClick={() => setNavbarOpen(false)}
                    to={x.link}
                    smooth
                    duration={500}
                    className={styles.navlink}
                  >
                    {x.text}
                  </Link>
                  <div className={styles.border}></div>
                </div>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.carritoContainer}>
          <Link to="/carrito">
            <img className={styles.carro} src={carritoImg} alt="Carro" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
