import React from "react";
import Titulo from "../Titulo/Titulo";
import Cards from "./Conhecimentos/Skills";
import "./sobre.css";

function Sobre() {
  return (
    <section className="sobre-mim" id="sobre">
      <Titulo title="Sobre mim" />
      <div className="container-msg">
        <p data-aos="fade-up" className="paragrafo espaco">
          Meu nome é Victor, tenho 21 anos e sou um amante da tecnologia. Sou desenvolvedor frontend e formado em Análise e Desenvolvimento de Sistemas pela Universidade
          Paulista.
        </p>

        <p data-aos="fade-down" className="paragrafo">
          Iniciei no desenvolvimento frontend em 2021. Atualmente venho
          estudando novas tecnologias e frameworks, buscando me aperfeiçoar cada
          vez mais.
        </p>
      </div>
      <Cards />
    </section>
  );
}

export default Sobre;
