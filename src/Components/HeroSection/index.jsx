import React from 'react';
import { Hero } from './style';
import { Container, Slide } from '@mui/material';
import Perfil from '../../Assets/cinza_3_crop.jpg';

const HeroSection = () => {
  return (
    <Container>
      <Hero>
        <div className="text-area">
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
