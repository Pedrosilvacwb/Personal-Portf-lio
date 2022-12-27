import React from 'react';
import { Footer } from './style';
import { Container } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref: contactRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <Footer id="Contact">
      <Container className="flex">
        <div>
          <p ref={contactRef} className={inView ? 'animeRight' : ''}>
            Estou disponivel para trabalho. Entre em contato comigo e marcamos
            uma conversa.
          </p>
        </div>
        <div>
          <ul className={inView ? 'animeLeft' : ''}>
            <li>pedrosilvacwb@gmail.com</li>
            <li>(41) 99988-2036</li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/pedrosilvacwb/"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Pedrosilvacwb"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Footer>
  );
};

export default Contact;
