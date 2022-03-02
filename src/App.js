import React from "react";
import Contato from "./components/Contato/Contato";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import Projetos from "./components/Projetos/Projetos";
import Sobre from "./components/Sobre/Sobre";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
