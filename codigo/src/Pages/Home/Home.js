// ...existing code...
import React, { useState, useRef } from 'react';
import Styles from './Home.module.css';

import Navbar from '../../Components/Navbar/Navbar';
import ModalMedia from '../../Components/ModalMedia/ModalMedia';
import ModalUser from '../../Components/ModalUser/ModalUser'
import FeedBack from '../../Components/Modal-FeedBack/FeedBack';
import BaseVideos from '../../Components/BaseVideos/BaseVideos';
import Footer from '../../Components/Footer/Footer';

import espacadorPretVermBaixo from '../../Components/IMG/EspacadorCBG/Espacador-PretVer-SentidoBaixo.png';
import espacadorVerPretBaxio from '../../Components/IMG/EspacadorCBG/Espacador-VerPret-SentidoBaixo.png';
import espacadorImgTeaser from '../../Components/IMG/EspacadorCBG/Espacador-VerPret-SentidoCima.png';
import Banner3D from '../../Components/IMG/BannerColoridoSolido.png';

// Sonoplastia IMG
import ImgSonoplastiaCafezin from '../../Components/IMG/Sonoplastia/CapaCafezinSagrado.png';
import ImgSonoplastiaClapClap from '../../Components/IMG/Sonoplastia/ClapClap.png';
import ImgSonoplastiaDesigual from '../../Components/IMG/Sonoplastia/Desigual.png';
import ImgSonoplastiaDexpaw from '../../Components/IMG/Sonoplastia/Dexpaw.png';
import ImgSonoplastiaOSomDoEncontro from '../../Components/IMG/Sonoplastia/oSomDoEncontro.png';
import ImgSonoplastiaPoluicaoSonora from '../../Components/IMG/Sonoplastia/poluicaoSonora.png';
import ImgSonoplastiaUmCampoMinadoSonoplastico from '../../Components/IMG/Sonoplastia/UmCampoMinadoSonoplastico.png';
import ImgSonoplastiaUmDiaNoTrabalho from '../../Components/IMG/Sonoplastia/UmDiaNoTrabalho.png';
import ImgSonoplastiaVisitaDespercebida from '../../Components/IMG/Sonoplastia/VisitaDespercebida.png';

// Videoclipe IMG
import ImgVideoClipe7Years from '../../Components/IMG/Videoclipe/7Years.png';
import ImgVideoClipeDeusMeProteja from '../../Components/IMG/Videoclipe/DeusMeProteja.png';
import ImgVideoClipeEspresso from '../../Components/IMG/Videoclipe/Espresso.png';
import ImgVideoClipeLesBitels from '../../Components/IMG/Videoclipe/LesBitels.png';
import ImgVideoClipesPrettyIsntPretty from '../../Components/IMG/Videoclipe/PrettyIsntPretty.png';
import ImgVideoClipesSonheiQueTavaCasando from '../../Components/IMG/Videoclipe/SonheiQueTavaCasando.png';
import ImgVideoClipesMinhaHeranca from '../../Components/IMG/Videoclipe/MinhaHerança.png';
import ImgVideoClipesMinhaVida from '../../Components/IMG/Videoclipe/Minha Vida.png';

// Cortes IMG
import ImgCortesAProva from '../../Components/IMG/Cortes/A Prova.png';
import ImgCortesDiaNormal from '../../Components/IMG/Cortes/Dia Normal.png';
import ImgCortesOPacote from '../../Components/IMG/Cortes/O pacote.png';
import ImgCortesPesadelos from '../../Components/IMG/Cortes/Pesadelos.png';
import ImgCortesRoubaramODherik from '../../Components/IMG/Cortes/Roubaram o Dherik.png';
import ImgCortesUmaLongaLongaEspera from '../../Components/IMG/Cortes/Uma longa, longa espera.png';
import ImgCortesPizza from '../../Components/IMG/Cortes/Pizza.png';

// Web IMG
import ImgWebAquelesQueSeCompletam from '../../Components/IMG/Webséries/Aqueles que se completam.png'
import ImgWebAqueleQueDanca from '../../Components/IMG/Webséries/Aquele que dança.png'
import ImgWebAqueleQueEViciadoEmMalhar from '../../Components/IMG/Webséries/Aquele que é viciado em malhar.png'
import ImgWebAqueleQueLate from '../../Components/IMG/Webséries/Aquele que late.png'
import ImgWebAqueleQuePesaOClima from '../../Components/IMG/Webséries/Aquele que pesa o clima.png'
import ImgWebAqueleQueRecriaFilmesDeTerror from '../../Components/IMG/Webséries/Aquele que recria filmes de terror.png'
import ImgWebAqueleQueViciouEmAchocolatado from '../../Components/IMG/Webséries/Aquele que viciou em achocolatado.png'
import ImgWebAqueleQueViciouNoApoio from '../../Components/IMG/Webséries/Aquele que viciou no apoio.png'

const Home = () => {
  // CONFIGS DE ESTILO EXTRA
  const styleEspacadorSonoplastia = {
    backgroundColor: '#A10E15',
    boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.5)',
    height: '80px',
    backgroundImage: `url(${espacadorVerPretBaxio})`
  };
  const styleEspacadorTeaser = {
    backgroundColor: '#A10E15',
    height: '80px',
    backgroundImage: `url(${espacadorImgTeaser})`
  };
  const styleEspacadorCortes = {
    backgroundColor: '#A10E15',
    height: '80px',
    backgroundImage: `url(${espacadorPretVermBaixo})`,
    border: 'none',
    boxShadow: 'none'
  };

  const styleBanner3D = {
    scrollMarginTop: '100px',
    backgroundImage: `url(${Banner3D})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '450px'
  };

  const colorWhite = { color: '#f1f1f1' };

  const Sonoplastia = { scrollMarginTop: '20px' };
  // FIM DAS CONFIGS DE ESTILO EXTRA


  // ESTADO DO MODAL + DADOS ENVIADOS PARA ELE
  const [modalData, setModalData] = useState({
    Nome: "",
    Src: "",
    Descricao: ""
  });

  const [isModalMediaOpen, setIsModalMediaOpen] = useState(false);

  const openModalMedia = (data) => {
    setModalData(data);
    setIsModalMediaOpen(true);
  };

  const closeModalMedia = () => {
    setIsModalMediaOpen(false);
  };

  // ESTADO DO FEEDBACK
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  // REFS DOS CARROSSEIS
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);
  const carouselRef4 = useRef(null);

  const handleOpenFeedback = () => setIsFeedbackOpen(true);
  const handleCloseFeedback = () => setIsFeedbackOpen(false);

  // botões 1
  const handlePrev1 = () => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: -Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };
  const handleNext1 = () => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };

  // botões 2
  const handlePrev2 = () => {
    const el = carouselRef2.current;
    if (!el) return;
    el.scrollBy({ left: -Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };
  const handleNext2 = () => {
    const el = carouselRef2.current;
    if (!el) return;
    el.scrollBy({ left: Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };

  // botões 3
  const handlePrev3 = () => {
    const el = carouselRef3.current;
    if (!el) return;
    el.scrollBy({ left: -Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };
  const handleNext3 = () => {
    const el = carouselRef3.current;
    if (!el) return;
    el.scrollBy({ left: Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };

  // botões 4
  const handlePrev4 = () => {
    const el = carouselRef4.current;
    if (!el) return;
    el.scrollBy({ left: -Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };
  const handleNext4 = () => {
    const el = carouselRef4.current;
    if (!el) return;
    el.scrollBy({ left: Math.round(el.clientWidth * 0.3), behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar onFeedbackClick={handleOpenFeedback} />
      <ModalUser />
      <ModalMedia
        Nome={modalData.Nome}
        Src={modalData.Src}
        Descricao={modalData.Descricao}
        isOpen={isModalMediaOpen}
        onClose={closeModalMedia}
      />
      <FeedBack isOpen={isFeedbackOpen} onClose={handleCloseFeedback} />

      <main>

        {/* Banner aqui */}
        <div id='Home' style={styleBanner3D} />

        {/* ------------------- SONOPLASTIA ------------------- */}
        <section className={Styles.Sonoplastia} id="Sonoplastia" style={Sonoplastia}>

          <div className="espacador" style={styleEspacadorSonoplastia} />

          <div className="margin">

            <div className="espacador" />

            <div className={Styles.titulo}>
              <h2>Sonoplastia</h2>
              <hr />
            </div>

            <div className="espacador" />

            <div className={Styles.Carousel} ref={carouselRef}>
              <BaseVideos
              Img={ImgSonoplastiaCafezin}
              Nome="Cafézin da Tarde Sagrado"
              onClick={() =>
                openModalMedia({
                  Nome: "Cafézin da Tarde Sagrado",
                  Src: "https://www.youtube.com/embed/AnhAyJEhcrA?si=8_GsVMA1mQlGlCIG",
                  Descricao: "Um menino que chegava em casa com objetivo de tomar um nescau mas acabou descobrindo algo inusitado na casa dele."
                })
              }
            />
              <BaseVideos
              Img={ImgSonoplastiaClapClap}
              Nome="Clap Clap"
              onClick={() =>
                openModalMedia({
                  Nome: "Cla Clap",
                  Src: "https://www.youtube.com/embed/BOyq2AiMSec?si=culo-f7HOrq3BSQP",
                  Descricao: "Uma garota aceita cuidar da casa da amiga enquanto ela viaja. À noite, coisas estranhas começam a acontecer, mas apenas quando as luzes estão apagadas. Sem saber, ela estásendo observada por um ser que só se manifesta na escuridão. Presa na casa e com a energia prestes a acabar, ela precisa lutar para sobreviver."
                })
              }
            />
              <BaseVideos
              Img={ImgSonoplastiaDesigual}
              Nome="Desigual"
              onClick={() =>
                openModalMedia({
                  Nome: "Desigual",
                  Src: "https://www.youtube.com/embed/ECOrqFv0aoc?si=RPECYCFVu-qb1gLe",
                  Descricao: "Duas realidades sob o mesmo teto. Enquanto o Patrão vive em um silêncio luxuoso e rotina serena, a Empregada Doméstica corre contra o relógio em um turbilhão de estresse e barulho incessante. Este curta-metragem usa paralelos visuais e contrastes sonoros brutais para expor a cruel desigualdade entre duas vidas que dividem o mesmo espaço, forçando uma reflexão sobre o preço do conforto."
                })
              }
            />
              <BaseVideos
              Img={ImgSonoplastiaDexpaw}
              Nome="Dexpaw"
              onClick={() =>
                openModalMedia({
                  Nome: "Dexpaw",
                  Src: "https://www.youtube.com/embed/-tbERdf3z3o?si=hpGdQwj3LhV3yBmK",
                  Descricao: "Um gato misterioso e mortal que percorre a vizinhança, caçando silenciosamente suas vítimas. Entre perseguições sombrias e rituais perturbadores, o felino revela uma inteligência quase sobrenatural."
                })
              }
            />
              <BaseVideos
              Img={ImgSonoplastiaOSomDoEncontro}
              Nome="O Som do Encontro"
              onClick={() =>
                openModalMedia({
                  Nome: "O Som do Encontro",
                  Src: "https://www.youtube.com/embed/W268fXcbNfk?si=OuIdYUYngyP-iZzC",
                  Descricao: "O Som do Encontro conta a história de dois vizinhos separados apenas por uma parede, que nunca se veem, mas se conectam profundamente por meio da música. Ao ouvir Sollas sendo tocada pela jovem pianista ao lado, um homem cansado encontra conforto e encanto no som que atravessa o ambiente. Sem diálogos, a obra se constrói exclusivamente pela sonoplastia, revelando, através dos ruídos, silêncios e melodias, o nascer de uma relação sensível e silenciosa entre dois desconhecidos."
                })
              }
            />
              <BaseVideos
              Img={ImgSonoplastiaPoluicaoSonora}
              Nome="Poluição Sonora"
              onClick={() =>
                openModalMedia({
                  Nome: "Poluição Sonora",
                  Src: "https://www.youtube.com/embed/CaHdZA65OgE?si=OIp74smwGyX9mv2GC",
                  Descricao: "Os barulhos que atrapalham a nossa rotina."
                })
              }
            />
              <BaseVideos
              Img={ImgSonoplastiaUmCampoMinadoSonoplastico}
              Nome="Um Campo Minado Sonoplástico"
              onClick={() =>
                openModalMedia({
                  Nome: "Um Campo Minado Sonoplástico",
                  Src: "https://www.youtube.com/embed/R0UTc-yIfho?si=ezUYxSnetVjiZRNB",
                  Descricao: "Em um dia normal na escola SESI, Inete trabalha com o Ivan para adiantar suas atividades atrasadas, até que a professora precisa sair de sala."
                })
              }
            />
              <BaseVideos
              Img={ImgSonoplastiaUmDiaNoTrabalho}
              Nome="Um Dia no Trabalho"
              onClick={() =>
                openModalMedia({
                  Nome: "Um Dia no Trabalho",
                  Src: "https://www.youtube.com/embed/InQWBclgxGs?si=MIBylUapcjAYMtN8",
                  Descricao: "Sons do cotidiano"
                })
              }
            />
              <BaseVideos
              Img={ImgSonoplastiaVisitaDespercebida}
              Nome="Visita Despercebida"
              onClick={() =>
                openModalMedia({
                  Nome: "Visita Despercebida",
                  Src: "https://www.youtube.com/embed/RkUjLlb71OU?si=RVrGLhXAceJi-2zS",
                  Descricao: "Sempre ao mesmo tempo, sempre pisando por cima de cascas de ovo, não faça nenhum barulho que ela não faria. Este curta-metragem demonstra o dia-a-dia de uma mulher cega que mora sozinha... ou pelo menos acha que mora..."
                })
              }
            />
            </div>

            {/* BOTÕES CORRIGIDOS */}
            <button
              className={Styles.btn_left_sono}
              onClick={handlePrev1}
              aria-label="Anterior"
            >
              ←
            </button>

            <button
              className={Styles.btn_right_sono}
              onClick={handleNext1}
              aria-label="Próxima"
            >
              →
            </button>

          </div>

          <div className="espacador" />
        </section>

        {/* ------------------- VIDEOCLIPE ------------------- */}
        <section className={Styles.VideoClipe} id="VideoClipe">

          <div className="margin">

            <div className={Styles.titulo}>
              <h2>Videoclipe</h2>
              <hr />
            </div>

            <div className="espacador" />

            <div className={Styles.Carousel} ref={carouselRef2}>
              <BaseVideos
              Img={ImgVideoClipeLesBitels}
              Nome="LesBitels"
              onClick={() =>
                openModalMedia({
                  Nome: "LesBitels",
                  Src: "https://www.youtube.com/embed/IsgOmx2LCbk?si=Znd2D3ugEGUYecZ6",
                  Descricao: "Recriação do clipe original da música Let it be dos beatles estrelando João Miguel como todos os beatles."
                })
              }
            />
              <BaseVideos
              Img={ImgVideoClipesSonheiQueTavaCasando}
              Nome="Sonhei que Tava Me Casando"
              onClick={() =>
                openModalMedia({
                  Nome: "Sonhei que Tava Me Casando",
                  Src: "https://www.youtube.com/embed/DU3hN3Hef9Y?si=wrhaJIZX19bwwFW4",
                  Descricao: "Um noivo despreparado se arruma para ir ao seu casamento. Melodia de Wesley Safadão “Sonhei que tava me casando”."
                })
              }
            />
              <BaseVideos
              Img={ImgVideoClipeDeusMeProteja}
              Nome="Deus Me Proteja"
              onClick={() =>
                openModalMedia({
                  Nome: "Deus Me Proteja",
                  Src: "https://www.youtube.com/embed/PwGKuF5Jpnw?si=0sdRGCdZ_W4uIxRK",
                  Descricao: "A releitura do videoclipe Reza da Rita Lee, mostra uma atmosfera colorida e divertida, misturando o humor e o misticismo para ilustrar uma prece contra o mau-olhado."
                })
              }
            />
              <BaseVideos
              Img={ImgVideoClipeEspresso}
              Nome="Espresso"
              onClick={() =>
                openModalMedia({
                  Nome: "Espresso",
                  Src: "https://www.youtube.com/embed/KckL-rYsQJ8?si=_XEA123FhegirSYl",
                  Descricao: "Sabrina termina o namoro, e Vitinho sofre profundamente com a separação. Enquanto tenta seguir a vida, Sabrina percebe que ainda sente falta dele. O reencontro entre os dois traz de volta tudo o que ainda existia, sem que nada tivesse mudado no meio do caminho. No final, Sabrina e Vitinho decidem voltar a ficar juntos, deixando apenas a dúvida do que vem depois."
                })
              }
            />
              <BaseVideos
              Img={ImgVideoClipesPrettyIsntPretty}
              Nome="Pretty Isn't Pretty"
              onClick={() =>
                openModalMedia({
                  Nome: "Pretty Isn't Pretty",
                  Src: "https://www.youtube.com/embed/49b5l9acTOo?si=rC8bYlAMW4uQGtFD",
                  Descricao: "Pretty isn’t pretty conta a história da Lacy, uma menina com muitas inseguranças."
                })
              }
            />
              <BaseVideos
              Img={ImgVideoClipe7Years}
              Nome="7 Years"
              onClick={() =>
                openModalMedia({
                  Nome: "7 Years",
                  Src: "https://www.youtube.com/embed/5-_UauRlN9k?si=Od0zOc3hF357BsIj",
                  Descricao: "O videoclip 7 years, mostra a passagem do tempo. A música percorre a vida , desde os 7 anos até a projeção dos 60 anos, refletindo sobre os conselhos dos pais, a busca por amigos e o amor. É uma jornada nostálgica que questiona o que realmente importa e como ser lembrado."
                })
              }
            />
              <BaseVideos
              Img={ImgVideoClipesMinhaHeranca}
              Nome="Minha Herança"
              onClick={() =>
                openModalMedia({
                  Nome: "Minha Herança",
                  Src: "https://www.youtube.com/embed/1YAaq89XtlA?si=FnvOoYY1VHZrBZ4P",
                  Descricao: "O videoclipe acompanha Sofia Coimbra enquanto ela revisita as origens que moldaram sua identidade. Inspirado pelas histórias e vivências de sua família — tanto do lado materno quanto paterno — transforma memórias afetivas em imagens sensíveis e poéticas. Cada cena funciona como um fragmento de herança, onde gestos, olhares e lembranças revelam o vínculo profundo entre Sofia e aqueles que vieram antes e depois dela. É uma homenagem íntima e emocionada às raízes que sustentam quem ela é."
                })
              }
            />
              <BaseVideos
              Img={ImgVideoClipesMinhaVida}
              Nome="Minha Vida"
              onClick={() =>
                openModalMedia({
                  Nome: "Minha Vida",
                  Src: "https://www.youtube.com/embed/BQ5mMOxYxfk?si=4CMh7Nsemuk5l4W7",
                  Descricao: "Minha vida é uma adaptação de Rita Lee da música In My Life dos Beatles. Minha ideia foi adaptar essa música para representar memórias da minha vida em um clipe."
                })
              }
            />
            </div>

            {/* BOTÕES CORRIGIDOS */}
            <button
              className={Styles.btn_left_video}
              onClick={handlePrev2}
              aria-label="Anterior videoclipe"
            >
              ←
            </button>

            <button
              className={Styles.btn_right_video}
              onClick={handleNext2}
              aria-label="Próxima videoclipe"
            >
              →
            </button>

          </div>

          <div className="espacador" />

        </section>

        {/* ------ Cortes ------ */}
        <section className={Styles.Cortes} id="Cortes">
          <div className="espacador" style={styleEspacadorTeaser} />
          <div className="espacador" />
          <div className="margin">
            <div className={Styles.titulo}>
              <h2>Cortes</h2>
              <hr />
            </div>
            <div className="espacador" />

            <div className={Styles.Carousel} style={colorWhite} ref={carouselRef3}>
              <BaseVideos
              Img={ImgCortesAProva}
              Nome="A Prova"
              onClick={() =>
                openModalMedia({
                  Nome: "A Prova",
                  Src: "https://www.youtube.com/embed/YkBHuNIt83M?si=Ds8Fc2W2I73NWusd",
                  Descricao: "A Prova acompanha a rotina de um protagonista que chama seu amigo para estudar para a prova, mas acaba cochilando e esquecendo completamente do compromisso. Quando acorda, percebe o desastre iminente e sai correndo desesperado atrás do amigo, criando uma sequência divertida e caótica embalada por cortes rápidos e sons que reforçam o clima de urgência."
                })
              }
            />
              <BaseVideos
              Img={ImgCortesDiaNormal}
              Nome="Dia Normal"
              onClick={() =>
                openModalMedia({
                  Nome: "Dia Normal",
                  Src: "https://www.youtube.com/embed/kq05p2Pqolg?si=PA_lqGl8MMC8iK5w",
                  Descricao: "Dia Normal acompanha a rotina de duas pessoas cujos caminhos se cruzam em um dia aparentemente comum — até que um acontecimento extremamente inesperado e perturbador muda tudo. Embalada pela intensidade crescente de In The Hall of the Mountain King, a obra explora diferentes tipos de corte e técnicas de sonoplastia para destacar a tensão, o caos e a sequência de eventos infelizes que se desenrolam."
                })
              }
            />
              <BaseVideos
              Img={ImgCortesOPacote}
              Nome="O Pacote"
              onClick={() =>
                openModalMedia({
                  Nome: "O Pacote",
                  Src: "https://www.youtube.com/embed/EkduosjqB_0?si=B0yZ6ISfyulUx2qy",
                  Descricao: "Uma jovem recebe uma mensagem misteriosa sobre um pacote inesperado. A partir daí, ela é envolvida em um suspense onde cada nova pista revela que a entrega esconde muito mais do que parece."
                })
              }
            />
              <BaseVideos
              Img={ImgCortesPesadelos}
              Nome="Pesadelos"
              onClick={() =>
                openModalMedia({
                  Nome: "Pesadelos",
                  Src: "https://www.youtube.com/embed/Pn6FEhuvPrA?si=GeHuNqHPs7ucNYcn",
                  Descricao: "Uma menina deita para descansar , e cai em um sono profundo, e acaba tendo Pesadelos confusos."
                })
              }
            />
              <BaseVideos
              Img={ImgCortesRoubaramODherik}
              Nome="Roubaram o Dherik"
              onClick={() =>
                openModalMedia({
                  Nome: "Roubaram o Dherik",
                  Src: "https://www.youtube.com/embed/rRbWX2FLlVI?si=Om-aA7-uD5vGqJN2",
                  Descricao: "Dherik, após acordar de um sono profundo, percebe que seus pertences sumiram, o mesmo, indignado, vai atrás de respostas."
                })
              }
            />
              <BaseVideos
              Img={ImgCortesUmaLongaLongaEspera}
              Nome="Uma longa, longa espera"
              onClick={() =>
                openModalMedia({
                  Nome: "Uma longa, longa espera",
                  Src: "https://www.youtube.com/embed/ANkiq3-ogjQ?si=BngBbk9JdJ18q7b1",
                  Descricao: "Um grupo de amigos recebe mensagem de sua amiga que está voltando de viagem, então, eles decidem se reunir para reencontrar sua amiga, mas algo inesperado acontece"
                })
              }
            />
              <BaseVideos
              Img={ImgCortesPizza}
              Nome="PIZZA"
              onClick={() =>
                openModalMedia({
                  Nome: "PIZZA",
                  Src: "https://www.youtube.com/embed/M4PCOiSHZ88?si=dgGDvxKsMy-_kaq6",
                  Descricao: "Dia dia normal de um entregador de pizza, onde no vídeo mostra um homem pedindo um pizza e seguido disso temos varios tipos de cortes. Dia normal"
                })
              }
            />
            </div>

            {/* BOTÕES CORRIGIDOS */}
            <button
              className={Styles.btn_left_cortes}
              onClick={handlePrev3}
              aria-label="Anterior videoclipe"
            >
              ←
            </button>

            <button
              className={Styles.btn_right_cortes}
              onClick={handleNext3}
              aria-label="Próxima videoclipe"
            >
              →
            </button>

          </div>
          <div className="espacador" />
        </section>

        {/* ------ Webseries ------ */}
        <section className={Styles.Webseries} id="Webseries">
          <div className="margin">
            <div className={Styles.titulo}>
              <h2>Webséries</h2>
              <hr />
            </div>
            <div className="espacador" />

            <div className={Styles.Carousel} style={colorWhite} ref={carouselRef4}>
              <BaseVideos
              Img={ImgWebAquelesQueSeCompletam}
              Nome="Aqueles que se Completam"
              onClick={() =>
                openModalMedia({
                  Nome: "Aqueles que se Completam",
                  Src: "https://www.youtube.com/embed/XTy6ai4Krbk?si=JLwVToZ5ASE4HN7X",
                  Descricao: "Duas novas mães de gêmeos, descobrem que a sincronia inseparável de Rafael e Rafaela é mais do que fofa, é assustadora. À medida que os filhos agem como uma única pessoa, a convivência familiar se torna insuportável e a tensão aumenta."
                })
              }
            />
              <BaseVideos
              Img={ImgWebAqueleQueDanca}
              Nome="Aquele que Dança"
              onClick={() =>
                openModalMedia({
                  Nome: "Aquele que Dança",
                  Src: "https://www.youtube.com/embed/y308prCqXqE?si=mtxsO3KCelTZuoWx",
                  Descricao: 'Dherik era só mais um adolescente do interior gaúcho... até descobrir um talento incontrolável: rebolar. Em um mundo onde cada batida pode desencadear um surto de dança, sua família entra em colapso tentando entender e "curar" o maior vício da atualidade. – Prepare-se para rir, chorar e... rebolar (um pouquinho).'
                })
              }
            />
              <BaseVideos
              Img={ImgWebAqueleQueEViciadoEmMalhar}
              Nome="Aquele que é Viciado em Malhar"
              onClick={() =>
                openModalMedia({
                  Nome: "Aquele que é Viciado em Malhar",
                  Src: "https://www.youtube.com/embed/-fQcT1vqHi0?si=fWWaq9IO94wt2hyh",
                  Descricao: "Entre tentativas desastrosas de transformar a escola em academia, marmitas de frango com batata doce no meio da aula e conversas hilárias no sofá, Rafa mostra que ser viciado em treino pode render muito mais do que músculos."
                })
              }
            />
              <BaseVideos
              Img={ImgWebAqueleQueLate}
              Nome="Aquele que Late"
              onClick={() =>
                openModalMedia({
                  Nome: "Aquele que Late",
                  Src: "https://www.youtube.com/embed/MUPG_c5F65U?si=yLrChdBIPniXDOWQ",
                  Descricao: "Lucky é um menino que é viciado em cachorros, desde sua infância ele teve atitudes como se fosse um canino, latia, mordia e até queria brincar com brinquedos de cachorro. Em um certo dia, sua mãe o colocou em um grupo de apoio para pessoas viciadas para tratar dessa questão."
                })
              }
            />
              <BaseVideos
              Img={ImgWebAqueleQuePesaOClima}
              Nome="Aquele que Pesa o Clima"
              onClick={() =>
                openModalMedia({
                  Nome: "Aquele que Pesa o Clima",
                  Src: "https://www.youtube.com/embed/NXJ0Fwg2xMA?si=GuJInCg7GkNoL8Z8",
                  Descricao: "Edward é um jovem adulto, que trabalha em um escritório junto com suas duas amigas Clara e Jessica, tudo vai muito bem até que ele desenvolve um vício: pesar o clima."
                })
              }
            />
              <BaseVideos
              Img={ImgWebAqueleQueRecriaFilmesDeTerror}
              Nome="Aquele que Recria Filmes de Terror"
              onClick={() =>
                openModalMedia({
                  Nome: "Aquele que Recria Filmes de Terror",
                  Src: "https://www.youtube.com/embed/dR0UNoZTz44?si=CiSHULqWJjLBN_rS",
                  Descricao: "Chegou a vez do Jason compartilhar sua história com o resto do grupo de viciados, recontando suas vivências trazidas pelo seu vicio: Filmes de terror"
                })
              }
            />
              <BaseVideos
              Img={ImgWebAqueleQueViciouEmAchocolatado}
              Nome="Aquele que Viciou em Achocolatado"
              onClick={() =>
                openModalMedia({
                  Nome: "Aquele que Viciou em Achocolatado",
                  Src: "https://www.youtube.com/embed/w5qj3uVun1c?si=hm1CE9C4ketV1YMQ",
                  Descricao: "Eduardo é um jovem viciado em achocolatado, e neste episodio um jornalista vai na missão de conseguir fazer uma entrevista com ele, para que nós possamos entender como isso acontece e aconteceu."
                })
              }
            />
              <BaseVideos
              Img={ImgWebAqueleQueViciouNoApoio}
              Nome="Aquela que Viciou no Apoio"
              onClick={() =>
                openModalMedia({
                  Nome: "Aquela que Viciou no Apoio",
                  Src: "https://www.youtube.com/embed/XagRuvSXN70?si=4zC34Q0HJBge2mE-",
                  Descricao: "Vanessa salta de um grupo virtual de autoajuda para outro, repetindo sempre o mesmo “Oi, eu sou a Vanessa” enquanto tenta se curar de algo que jamais nomeia. Entre humor sutil e melancolia, ela se perde em reuniões que começam a reconhecê-la mesmo quando jura estar ali pela primeira vez."
                })
              }
            />
            </div>

            {/* BOTÕES CORRIGIDOS */}
            <button
              className={Styles.btn_left_web}
              onClick={handlePrev4}
              aria-label="Anterior videoclipe"
            >
              ←
            </button>

            <button
              className={Styles.btn_right_web}
              onClick={handleNext4}
              aria-label="Próxima videoclipe"
            >
              →
            </button>

          </div>
          <div className="espacador" style={styleEspacadorCortes} />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
