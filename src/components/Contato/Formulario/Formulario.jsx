import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./formulario.css";
import "./modal.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Formulario() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const form = useRef();
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_th7dvxn",
        "template_z3m1l6u",
        e.target,
        "JlrFaQGyKlrZ2tbfN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="formulario">
      <form
        className="form"
        ref={form}
        onSubmit={sendEmail}
        onSubmitCapture={toggleModal}
        data-aos="slide-right"
      >
        <div >
          <label className="lbl-nome">Nome</label>
          <input type="text" id="nome" name="from_name" required />
        </div>

        <div>
          <label className="lbl-email">E-mail</label>
          <input type="email" id="email" name="from_email" required />
        </div>

        <div>
          <label className="lbl-mensagem" required>
            Mensagem
          </label>
          <textarea name="message" required/>
        </div>

        <input
          className="btn-enviar"
          id="mensagem"
          type="submit"
          value="Enviar"
          required
        />

        {modal && (
          <div className="modal">
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
              <h2>Obrigado pela mensagem!</h2>
              <p>Estarei te respondendo o mais rápido possível! 😁</p>
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Formulario;
