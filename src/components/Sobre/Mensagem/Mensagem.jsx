import React, { useEffect } from "react";
import "./mensagem.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Mensagem() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="container-msg">
      <p data-aos="fade-right" className="paragrafo espaco">
        Meu nome é Victor, tenho 20 anos e sou um amante da tecnologia. Sou
        formado em Análise e Desenvolvimento de Sistemas pela Universidade
        Paulista.
      </p>

      <p data-aos="fade-left" className="paragrafo">
        Iniciei no desenvolvimento frontend em 2021. Atualmente venho estudando
        novas tecnologias e frameworks, buscando me aperfeiçoar cada vez mais.
      </p>
    </div>
  );
}

export default Mensagem;
