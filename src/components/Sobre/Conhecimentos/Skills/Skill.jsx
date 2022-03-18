import React, { useEffect } from "react";
import Componente from "./Componente";
import Aos from "aos";
import "aos/dist/aos.css";

function Skill() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const linguagens = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "SQL",
    "UI Design",
    "Git",
    "Responsive Design",
  ];

  return (
    <div className="container__skills">
      <div data-aos="fade-up" className="skill">
        {linguagens.map((nome, index) => (
          <Componente key={index} nome={nome} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
