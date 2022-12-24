import React from 'react';
import { Container } from '@mui/material';
import { StyledHeader } from './style';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <h1>
          Pedro <span>Silva</span>
        </h1>

        <nav>
          <ul>
            <li>
              <a href="">
                <span>&#60;</span>Sobre<span>/&#62;</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>&#60;</span>Experiencias<span>/&#62;</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>&#60;</span>Projetos<span>/&#62;</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>&#60;</span>Contato<span>/&#62;</span>
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li>
              <a href="">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="">
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
