import React from 'react';
import { Hero } from './style';
import { Container } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Perfil from '../../Assets/cinza_3_crop.jpg';

const HeroSection = () => {
  const { ref: heroRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <Container>
      <Hero>
        <div
          ref={heroRef}
          className={`text-area ${inView ? 'animeRight' : ''}`}
        >
          <span className="tag">Full-Stack Developer</span>
          <h1>
            <span className="green">&#60;</span>Olá Mundo! Me chamo{' '}
            <span className="green">Pedro Silva</span> e sou um desenvolvedor
            Full-Stack<span className="green">/&#62;</span>
          </h1>
          <div className="bottomHero">
            <div>
              <h2>1</h2>
              <p>
                Ano de <br />
                Experiencia
              </p>
            </div>
            <div>
              <h2>+15</h2>
              <p>
                Projetos <br />
                Realizados
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src={Perfil} alt="Foto de Perfil de Pedo Silva" />
        </div>
      </Hero>
    </Container>
  );
};

export default HeroSection;
