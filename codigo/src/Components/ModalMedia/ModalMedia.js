import React from "react";
import Styles from "./ModalMedia.module.css";

export default function ModalMedia({ isOpen, onClose, Nome, Src, Descricao }) {
  if (!isOpen) return null;

  return (
    <div className={Styles.janela_modal}>
      <div className={Styles.container}>

        <button className={Styles.btn_Voltar} onClick={onClose}>
          ← Voltar
        </button>

        <div className={Styles.espacador} />

        <div className={Styles.box_iframe}>
          <iframe
            width="90%"
            height="400px"
            src={Src}
            title={Nome}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className={Styles.espacador} />

        <div className={Styles.box_informacoes}>
          <h2 className={Styles.Titulo}>{Nome}</h2>

          <div className={Styles.espacador} />

          <p className={Styles.Descricao}>{Descricao}</p>
        </div>

      </div>
    </div>
  );
}
