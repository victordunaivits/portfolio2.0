import React from "react";
import './DownloadButton.css'
import './cv-victordunaivits.pdf'

function DownloadButton() {
  return (
    <a className="botao" href={require('./cv-victordunaivits.pdf')} download>Download CV</a>
  );
}

export default DownloadButton;
