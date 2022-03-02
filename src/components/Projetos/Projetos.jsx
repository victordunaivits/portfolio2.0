import React, { useEffect } from "react";
import Titulo from "../Titulo/Titulo";
import Card from "./Card/Card";
import "./projetos.css";
import data from "./data";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = ({ data }) => {
  return (
    <>
      {data.map(({ id, title, descricao, img, url, linkProjeto }) => (
        <Card
          key={id}
          bg={img}
          titulo={title}
          descricao={descricao}
          url={url}
          linkProjeto={linkProjeto}
        />
      ))}
    </>
  );
};

function Projetos() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <section className="container__projetos" id='projetos'>
      <Titulo title="Projetos" />

      <div data-aos="zoom-out-right" className="container__cards">
        <Home data={data} />
      </div>

      <a
        href="https://github.com/victordunaivits?tab=repositories"
        target="_blank"
        className="link__repositorio"
        rel="noreferrer"
        data-aos="fade-up"
      >
        Repositório completo <span className="seta">»</span>{" "}
      </a>
    </section>
  );
}

export default Projetos;
