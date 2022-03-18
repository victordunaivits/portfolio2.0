import React from "react";
import './titulo.css'

function Subtitulo({ subtitulo }) {
  return (
    <h2 className="subtitulo">
      <span className="color">{"/*"}</span>{subtitulo}<span className="color">{"*/"}</span>
    </h2>
  );
}

export default Subtitulo;
