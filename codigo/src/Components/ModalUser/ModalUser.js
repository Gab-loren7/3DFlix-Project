import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModalUser.css';

function App() {
  const btnRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStyle, setModalStyle] = useState({});

  const [userName, setUserName] = useState('');
  const [userPhoto, setUserPhoto] = useState('');

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setModalVisible(false), 260);
  };

  useEffect(() => {
    if (!modalVisible) return;
    const handler = () => closeModal();
    window.addEventListener('wheel', handler, { passive: true });
    window.addEventListener('scroll', handler, { passive: true });
    return () => {
      window.removeEventListener('wheel', handler);
      window.removeEventListener('scroll', handler);
    };
  }, [modalVisible]);

  useEffect(() => {
    const onOpenUserModal = (e) => {
      const d = e && e.detail ? e.detail : {};

      if (d.bottom != null && d.left != null) {
        setModalStyle({ position: 'fixed', top: `${d.bottom + 8}px`, left: `${d.left}px`, zIndex: 1001 });
      } else if (btnRef.current) {
        const { bottom, left } = btnRef.current.getBoundingClientRect();
        setModalStyle({ position: 'fixed', top: `${bottom + 8}px`, left: `${left}px`, zIndex: 1001 });
      }

      setModalVisible(true);
      requestAnimationFrame(() => setModalOpen(true));
    };

    window.addEventListener('open-user-modal', onOpenUserModal);
    return () => window.removeEventListener('open-user-modal', onOpenUserModal);
  }, []);

  useEffect(() => {
    const onProfileUpdated = (e) => {
      const p = e && e.detail ? e.detail : null;
      if (!p) return;
      if (p.nome && typeof p.nome === 'string') setUserName(p.nome);
      if (p.foto && typeof p.foto === 'string') setUserPhoto(p.foto);
    };

    window.addEventListener('profile-updated', onProfileUpdated);
    return () => window.removeEventListener('profile-updated', onProfileUpdated);
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('perfilAtivo');
      if (!raw) return;

      const parsed = JSON.parse(raw);

      if (parsed.nome && typeof parsed.nome === 'string') setUserName(parsed.nome);
      if (parsed.foto && typeof parsed.foto === 'string') setUserPhoto(parsed.foto);
    } catch (err) {
      console.warn('Failed to parse perfilAtivo from localStorage', err);
    }
  }, []);

  const navigate = useNavigate();

  function Logout() {
    localStorage.removeItem('perfilAtivo');
    navigate('/');
  }

  function TrocarPerfil(){
    localStorage.removeItem('perfilAtivo');
    navigate('/Perfis');
  }

  function EditarPerfil(){
    navigate('/EditarPerfil')
  }

  return (
    <div className='tudo'>
      {modalVisible && <div id='fadeUsuario' className={modalOpen ? 'show' : 'hide'} onClick={closeModal} />}

      {modalVisible && (
        <div className={`fundoVermelhoModal ${modalOpen ? 'show' : 'hide'}`} style={modalStyle}>
          <div id='modalUsuario' className={modalOpen ? 'show' : 'hide'} role="dialog" aria-hidden={!modalOpen}>

            <div className='btnModal' id='perfilUsuario'>
              <img src={userPhoto} alt='Foto do seu perfil' />

              <p>{userName}</p>
            </div>

            <div className='btnModal' id='trocarPerfil' onClick={TrocarPerfil}>
              <svg xmlns="http://www.w3.org/2000/svg" className="trocarIcon" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>

              <p>Trocar de Perfil</p>
            </div>

            <div className='btnModal' id='editarPerfil' onClick={EditarPerfil}>
              <svg xmlns="http://www.w3.org/2000/svg" className="editarIcon" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
              </svg>

              <p>Editar Perfil</p>
            </div>

            <button onClick={Logout}>Sair</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
