import React, { useState } from 'react';
import Styles from './Navbar.module.css';

function Navbar() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleCloseClick = () => {
    setIsSearchActive(false);
  };

  return (
    <div>
      <header>
        <div className={Styles.navbar}>

          <div className={Styles.box_profile}>
            <div className={Styles.IMGprofile}></div>
            <i className="bi bi-arrow-down arrowProfile" id="arrowProfile"></i>
          </div>

          <div className={Styles.box_menu}>
            <a href="/">Home</a>
            <a href="/">Documentários</a>
            <a href="/">Destaques</a>
            <a href="/">Filmes</a>
            <a href="/">Feedback</a>
          </div>

          <div className={Styles.box_PesquisaLogo}>
            {/* 
              Adicionamos a classe 'ativar' dinamicamente se isSearchActive for true 
            */}
            <div
              className={`${Styles.box_Pesquisa} ${isSearchActive ? Styles.ativar : ''}`}
              id="boxBuscar"
            >
              <div
                className={Styles.lupa_buscar}
                id="lupaBuscar"
                onClick={handleSearchClick}
              >
                <i className="bi bi-search"></i>
              </div>

              <div className={Styles.input_buscar}>
                <input type="text" placeholder="Buscar" />
              </div>

              <div
                className={Styles.btn_fechar}
                id="btnFechar"
                onClick={handleCloseClick}
              >
                <i className="bi bi-x-circle"></i>
              </div>
            </div>

            <div className={Styles.Logo}></div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Navbar;
