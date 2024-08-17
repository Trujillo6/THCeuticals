import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { MdOutlineMenu } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

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
    <a href="/">INICIO</a>,
    { id: 1, link: "INICIO" },
    { id: 2, link: "PRODUCTOS" },
    { id: 3, link: "CONTACTO" },
    { id: 4, link: "ALEX RIOS" },
  ];

  //const scrollPosition = useScrollPosition();

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
                    {x.link}
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
                    {x.link}
                  </Link>
                  <div className={styles.border}></div>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
