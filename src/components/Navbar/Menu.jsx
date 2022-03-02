import React, { useState } from "react";
import { Link } from "react-scroll";

function Menu({ sobre_mim }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ul className={`itens ${isOpen && "open"}`}>
        <li>
          <Link
            to="landing"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="item-navbar"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="sobre"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="item-navbar"
          >
            Sobre mim
          </Link>
        </li>
        <li>
          <Link
            to="projetos"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="item-navbar"
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            to="contato"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="item-navbar"
          >
            Contato
          </Link>
        </li>
      </ul>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </>
  );
}

export default Menu;
