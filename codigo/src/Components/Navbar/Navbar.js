import React from 'react'
import Styles from './Navbar.module.css'

function Navbar() {
  return (
    <div>
      <header>
        <div className={Styles.navbar} >

          <div className={Styles.box_profile}>
            <div className={Styles.IMGprofile}></div>
            <i class="bi bi-arrow-down arrowProfile" id='arrowProfile'></i>
          </div>

          <div className={Styles.box_menu}>
            <a href='/'>Home</a>
            <a href='/'>Documentários</a>
            <a href='/'>Destaques</a>
            <a href='/'>Filmes</a>
            <a href='/'>Feedback</a>
          </div>

          <div className={Styles.box_PesquisaLogo}>

            <div className={Styles.box_Pesquisa}>

              <div className={Styles.lupa_buscar}>
                <i class="bi bi-search"></i>
              </div> {/* lupa-buscar */}

              <div className={Styles.input_buscar}>
                <input type="text" placeholder='Buscar' />
              </div> {/* input-buscar */}

              <div className={Styles.btn_fechar}>
                <i class="bi bi-x-circle"></i>
              </div> {/* btn-fechar */}

            </div>

            <div className={Styles.Logo}></div>
          </div>

        </div>
      </header>
    </div>
  )
}

export default Navbar;