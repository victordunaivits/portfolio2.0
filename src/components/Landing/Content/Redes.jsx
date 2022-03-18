import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import "./redes.css";

function Redes() {
  return (
    <div className="redes-sociais">
      <a
        href="https://github.com/victordunaivits"
        target="_blank"
        className="icone"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" fade />
      </a>
      <a
        href="https://www.linkedin.com/in/victordunaivits/"
        target="_blank"
        className="icone"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" fade />
      </a>
      <a
        href="https://www.instagram.com/victordunaivits/"
        target="_blank"
        className="icone"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" fade />
      </a>

      <a
        href="https://open.spotify.com/user/isaofzcyo7qlxpf0gfhz7hreb"
        target="_blank"
        className="icone"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faSpotify} size="2x" fade />
      </a>
    </div>
  );
}

export default Redes;
