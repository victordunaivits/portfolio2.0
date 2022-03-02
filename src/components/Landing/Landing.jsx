import React from "react";
import Wave from "./Wave/Wave";
import Conteudo from "./Content/Conteudo";
import "./landing.css";

function Landing() {

  return (
    <section className="landing" id="landing">
      <Conteudo />
      <Wave />
    </section>
  );
}

export default Landing;
