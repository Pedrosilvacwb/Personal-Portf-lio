import React from 'react';
import { Container, Slide } from '@mui/material';
import { StyledHeader } from './style';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';

const Header = () => {
  const { ref: headerRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <Container>
      <StyledHeader className={inView ? 'animeDown' : ''} ref={headerRef}>
        <h1>
          Pedro <span>Silva</span>
        </h1>

        <nav>
          <ul>
            <li>
              <Link to="About" spy={true} smooth={true} duration={600}>
                <span>&#60;</span>Sobre<span>/&#62;</span>
              </Link>
            </li>
            <li>
              <Link to="Technologies" spy={true} smooth={true} duration={600}>
                <span>&#60;</span>Experiencias<span>/&#62;</span>
              </Link>
            </li>
            <li>
              <Link to="Projects" spy={true} smooth={true} duration={800}>
                <span>&#60;</span>Projetos<span>/&#62;</span>
              </Link>
            </li>
            <li>
              <Link to="Contact" spy={true} smooth={true} duration={900}>
                <span>&#60;</span>Contato<span>/&#62;</span>
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/pedrosilvacwb/"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Pedrosilvacwb"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
        </nav>
      </StyledHeader>
    </Container>
  );
};

export default Header;
