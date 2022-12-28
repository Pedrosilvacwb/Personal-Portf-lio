import React from 'react';
import { About } from './style';
import { Container } from '@mui/material';
import Img from '../../Assets/pedro_23_12_22_ (1).jpg';
import { useInView } from 'react-intersection-observer';
import CV from '../../Assets/Cv/Cv - Pedro Cardozo e Silva (1).pdf';
const AboutMe = () => {
  const { ref: aboutRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <Container>
      <About id="About" className={inView ? 'animeUp' : ''}>
        <div>
          <img src={Img} alt="" />
        </div>
        <div className="textArea">
          <h2>
            <span className="green">&#60;</span>Sobre Mim
            <span className="green">/&#62;</span>
          </h2>
          <p ref={aboutRef}>
            Natural de <span className="gren">Curitiba</span>, atuei durante 10
            anos como chef de cozinha em diversos restaurantes do Brasil e no
            exterior.
          </p>
          <p>
            Em 2022 resolvi fazer uma mudança de carreira para a área de
            tecnologia. Desde então venho estudando e realizando diversos
            projetos utilizando as{' '}
            <span className="green">principais tecnologias do mercado</span>.
          </p>
          <a href={CV} className="cvDownload" download={true}>
            Curriculum pdf
          </a>
        </div>
      </About>
    </Container>
  );
};

export default AboutMe;
