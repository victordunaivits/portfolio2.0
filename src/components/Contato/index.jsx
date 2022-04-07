import React from "react";
import Titulo from "../Titulo/Titulo";
import Formulario from "./Formulario/";
import "./contato.css";

function Contato() {
  return (
    <section className="container__contato" id="contato">
      <Titulo title="Contato" />
      <h3>Me envie uma mensagem!! 📧</h3>
      <Formulario />
    </section>
  );
}

export default Contato;
