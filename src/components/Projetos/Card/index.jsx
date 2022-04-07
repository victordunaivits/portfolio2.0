import React from "react";
import "./card.css";

function Card({ titulo, descricao, bg, url, linkProjeto }) {
  return (
    <div className="card">
      <a href={linkProjeto} target="_blank" rel="noreferrer">
        <div className="imagem__card">
          <img className="imagem" src={bg} alt="img" />
        </div>
      </a>

      <div className="conteudo__card">
        <p className="titulo__projeto">{titulo}</p>
        <p className="descricao__projeto">{descricao}</p>
        <a href={url} target="_blank" className="botao__card" rel="noreferrer">
          Repositório
        </a>
      </div>
    </div>
  );
}

export default Card;
