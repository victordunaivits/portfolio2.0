import React from "react";
import Titulo from "../Titulo/Titulo";
import Mensagem from "./Mensagem/Mensagem";
import Cards from "./Conhecimentos/Cards";
import "./sobre.css";

function Sobre() {
  return (
    <section className="sobre-mim" id='sobre'>
      <Titulo title="Sobre mim" />
      <Mensagem />
      <Cards />
    </section>
  );
}

export default Sobre;
