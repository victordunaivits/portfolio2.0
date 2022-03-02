import React, { useEffect } from "react";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Componente({ nome }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return <div className="solo__component">{nome}</div>;
}

export default Componente;
