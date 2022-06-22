import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import LogoImg from "./LogoImg";
import "./navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  // Alterar cor da navbar conforme rolamento da página
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <LogoImg />
      <Menu />
    </div>
  );
}

export default Navbar;
