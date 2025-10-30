import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import FeedBack from '../../Components/Modal-FeedBack/FeedBack';
import Styles from './Home.module.css'

import BannerSite from '../../Components/IMG/VSFD/CameraAquelesEditadoMaior.png'
import BaseVideos from '../../Components/BaseVideos/BaseVideos';

import espacadorImgSonoplastia from '../../Components/IMG/EspacadorCBG/Espacador-PretVer-SentidoBaixo.png';
import espacadorImgTeaser from '../../Components/IMG/EspacadorCBG/Espacador-VerPret-SentidoCima.png';

import ImgSonoplastia from '../../Components/IMG/Sonoplastia/CapaCafezinSagrado.png'

function Home() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const handleOpenFeedback = () => setIsFeedbackOpen(true);
  const handleCloseFeedback = () => setIsFeedbackOpen(false);

  const styleEspacador = {
    height: '50px'
  }; const styleEspacadorSonoplastia = {
    backgroundColor: '#A10E15',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)',
    height: '80px',
    backgroundImage: `url(${espacadorImgSonoplastia})`
  }; const styleEspacadorTeaser = {
    backgroundColor: '#A10E15',
    height: '80px',
    backgroundImage: `url(${espacadorImgTeaser})`
  };

  const Sonoplastia = {
    scrollMarginTop: '80px'
  };

  return (
    <div>
      <Navbar onFeedbackClick={handleOpenFeedback} />
      <FeedBack
        isOpen={isFeedbackOpen}
        onClose={handleCloseFeedback}
      />
      <main>

        <div className={Styles.Box_Banner}>

          {/* Banner do Site */}
          <img src={BannerSite} alt='Banner do Site' />

          {/* Box Mini Banner */}
          <div className={Styles.Box_MiniBanner}>
            {/* Botão Player */}
            <i class="bi bi-play-circle" id={Styles.btn_play}></i>

            {/* Mini Baner */}
            <div className={Styles.MiniBanner} />

            <div className='espacador' style={styleEspacador}></div>

            {/* Btn Mais Informações */}
            <div className={Styles.btn_informacoes}><i class="bi bi-info-circle"></i><p>Mais Informações</p></div>
          </div> {/* Fim Box Mini Banner */}

        </div>

        {/* Section Sonoplastia */}
        <section className={Styles.Sonoplastia} id='Sonoplastia' style={Sonoplastia}>

          <div className='espacador' style={styleEspacadorSonoplastia} />

          <div className='margin'>
            <div className='espacador' />

            <div className={Styles.titulo}>
              <h2>Sonoplastia</h2>
              <hr />
            </div>

            <div className='espacador' />

            <BaseVideos Img={ImgSonoplastia} Nome={'Cafezinho da Tarde Sagrado'} />
          </div>
          <div className='espacador' />

        </section>  {/* Fim Section Sonoplastia */}

        {/* Section Videoclipe */}
        <section className={Styles.VideoClipe} id='VideoClipe'>

          <div className='margin'>
            <div className={Styles.titulo}>
              <h2>Videoclipe</h2>
              <hr />
            </div>

            <div className='espacador' />

            {/* Div com vídeos */}
          </div>

          <div className='espacador' />

        </section> {/* Fim Section Videoclipe */}

        {/* Section Teaser */}
        <section className={Styles.Teaser} id='Teaser'>
          <div className='espacador' style={styleEspacadorTeaser} />
          <div className='margin'>
            <div className='espacador' />
            <div className={Styles.titulo}>
              <h2>Teaser</h2>
              <hr />
            </div>

            <div className='espacador' />

            {/* Div com vídeos */}

          </div>
          <div className='espacador' />
        </section> {/* Fim Section Teaser */}


        {/* Section Cortes */}
        <section className={Styles.Cortes} id='Cortes'>

          <div className='margin'>
            <div className={Styles.titulo}>
              <h2>Cortes</h2>
              <hr />
            </div>

            <div className='espacador' />

            {/* Div com vídeos */}
          </div>

          <div className='espacador' />

        </section> {/* Fim Section Cortes */}
      </main>
    </div>
  );
}

export default Home;