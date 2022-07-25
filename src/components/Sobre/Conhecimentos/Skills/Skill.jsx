import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './index.css'

function Skill() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const linguagens = [
    "React",
    "Angular",
    "Python",
    "Typescript",
    "Javascript",
    "Bootstrap",
    "MaterialUI",
    "Sass",
    "HTML",
    "CSS",
    "UI/UX Design"
  ];

  return (
    <div className="container__skills">
      <div data-aos="fade-right" className="skill">
        {linguagens.map((nome, i) => (
          <div className="solo__component" key={i}>{nome}</div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
