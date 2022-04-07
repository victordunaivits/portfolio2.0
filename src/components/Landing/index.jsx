import React from "react";
import Apresentacao from "./Apresentacao";
import DownloadButton from "./DownloadButton";
import Redes from "./Redes";
import "./landing.css";

function Landing() {

  return (
    <section className="landing" id="landing">
      <Apresentacao />
      <Redes />
      <DownloadButton />
    </section>
  );
}

export default Landing;
