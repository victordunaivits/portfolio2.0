import React from "react";
import './files/cv-victordunaivits.pdf'

function DownloadButton() {
  return (
    <a className="botao" href={require('./files/cv-victordunaivits.pdf')} download>Download CV</a>
  );
}

export default DownloadButton;
