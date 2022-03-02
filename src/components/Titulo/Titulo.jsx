import React from "react";
import "./titulo.css";

function Titulo({ title }) {

  return (
    <div className="section-titulo">
      <div className="container">
        <h1 className="symbol">{'<'}<span className="color-symbol">{'/'}</span>{'>'}</h1>
        <h1 className="title">{title}</h1>
      </div>
    </div>
  )
}

export default Titulo;
