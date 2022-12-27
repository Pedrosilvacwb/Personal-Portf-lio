import React from 'react';
import { Container } from '@mui/material';
import { ProjectsSection } from './style';
import { projects } from '../../Utils/Projects';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref: projRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <Container>
      <ProjectsSection id="Projects" className={inView ? 'animeUp' : ''}>
        <h2>
          <span className="green">&#60;</span>Projetos
          <span className="green">/&#62;</span>
        </h2>
        <ul ref={projRef}>
          {projects.map((proj) => (
            <li key={proj.name}>
              <a rel="noreferrer" target="_blank" href={proj.page}>
                <img src={proj.img} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </ProjectsSection>
    </Container>
  );
};

export default Projects;
