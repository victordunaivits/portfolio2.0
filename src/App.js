import React from "react";
import Contato from "./components/Contato";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </main>
  );
}

export default App;
