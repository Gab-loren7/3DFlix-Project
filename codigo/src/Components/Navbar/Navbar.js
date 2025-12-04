import React, { useState, useEffect } from 'react';
import Styles from './Navbar.module.css';

const Navbar = ({ onFeedbackClick }) => {

  // Estado que controla a rotação do ícone de perfil
  const [isProfileRotated, setIsProfileRotated] = useState(false);

  // Função que alterna (toggle) o estado de rotação do perfil
  // chamada quando o usuário toca/clica na caixa do perfil
  const handleProfileClick = (event) => {
    setIsProfileRotated(prev => !prev);

    try {
      const rect = event.currentTarget.getBoundingClientRect();
      window.dispatchEvent(new CustomEvent('open-user-modal', { detail: { bottom: rect.bottom, left: rect.left } }));
    } catch (err) {
      // Fallback: still attempt to open without coordinates
      window.dispatchEvent(new CustomEvent('open-user-modal', { detail: {} }));
    }
  };

  const [userPhoto, setUserPhoto] = useState(null);

  useEffect(() => {
    const read = () => {
      try {
        const raw = localStorage.getItem('perfilAtivo');
        if (!raw) return;
        const parsed = JSON.parse(raw);

        if (parsed && parsed.foto && typeof parsed.foto === 'string') setUserPhoto(parsed.foto);
      } catch (err) {
        // ignore
      }
    };

    read();

    const onProfileUpdated = (e) => {
      const p = e && e.detail ? e.detail : null;
      if (!p) return;
      if (p.foto && typeof p.foto === 'string') setUserPhoto(p.foto);
    };

    window.addEventListener('profile-updated', onProfileUpdated);
    return () => window.removeEventListener('profile-updated', onProfileUpdated);
  }, []);

  return (
    <div>
      <header>
        <div className={Styles.navbar}>

          {/* Box Profile */}
          <div className={Styles.box_profile} onClick={handleProfileClick}>

            {/* IMGprofile: espaço reservado para a imagem do usuário */}
            <div className={Styles.IMGprofile}>
              {userPhoto ? <img src={userPhoto} alt="Foto do perfil" /> : null}
            </div>

            {/* Ícone da seta do perfil - rotação controlada por estado */}
            <i
              className={`bi bi-arrow-down arrowProfile ${isProfileRotated ? Styles.rotated : ''}`}
              id="arrowProfile"
              aria-hidden="true"
            ></i>

          </div> {/* Fim Box Profile */}

          {/* Box Menu */}
          <div className={Styles.box_menu}>
            <a href="#">Home</a>
            <a href="#Sonoplastia">Sonoplastia</a>
            <a href="#VideoClipe">Videoclipe</a>
            <a href="#Cortes">Cortes</a>
            <a href="#Webseries">Webséries</a>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              onFeedbackClick();
            }}>Feedback</a>
          </div> {/* Fim Box Menu */}

          {/* Box Pesquisa e Logo */}
          <div className={Styles.box_PesquisaLogo}>


            {/* Logo: espaço para o logotipo do projeto */}
            <div className={Styles.Logo} />

          </div> {/* Fim Box Pesquisa e Logo */}

        </div>
      </header>
    </div>
  );
}

export default Navbar;