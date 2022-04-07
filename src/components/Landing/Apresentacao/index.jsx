import React from "react";
import Typical from "react-typical";
import "./Apresentacao.css";

function Apresentacao() {
  return (
    <div className="conteudo">
      <h1>Olá, meu nome é</h1>
      <h1>Victor Dunaivits</h1>
      <h2>
        <Typical
          steps={["Desenvolvedor Frontend", 2000, "UI Designer", 2000]}
          loop={Infinity}
          wrapper="p"
        />
      </h2>
    </div>
  );
}

export default Apresentacao;
