import React from 'react';
import { Container, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Techs } from './style';
import { techs } from '../../Utils/Techs';
import { useInView } from 'react-intersection-observer';
const Technologies = () => {
  const [value, setValue] = React.useState('1');
  const { ref: techRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const { ref: techLogoRef, inView: logoInview } = useInView({
    threshold: 0,
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Techs id="Technologies" className={inView ? 'animeUp' : ''}>
      <Container>
        <h2 ref={techRef}>
          <span className="green">&#60;</span>Tecnologias
          <span className="green">/&#62;</span>
        </h2>
        <TabContext value={value}>
          <div>
            <TabList
              centered
              sx={{
                '& button': { color: '#47D974' },
                '& button:active': { color: '#47D974' },
                '& button:hover': { color: '#47D974' },
                '& button:focus': { color: '#47D974' },
              }}
              TabIndicatorProps={{ sx: { backgroundColor: '#47D974' } }}
              onChange={handleChange}
            >
              <Tab className="techsBtn" label="Front-End" value="1" />
              <Tab className="techsBtn" label="Back-End" value="2" />
            </TabList>
          </div>
          <div>
            <TabPanel value="1">
              <ul className="techList">
                {techs.map(
                  (tech) =>
                    tech.stack === 'Front-End' && (
                      <li
                        className={logoInview ? 'animeRight' : ''}
                        ref={techLogoRef}
                        key={tech.name}
                      >
                        <img src={tech.logo} alt={tech.name} />
                      </li>
                    ),
                )}
                <hr />
              </ul>
            </TabPanel>
            <TabPanel value="2">
              {' '}
              <ul className="techList">
                {techs.map(
                  (tech) =>
                    tech.stack === 'Back-End' && (
                      <li
                        className={logoInview ? 'animeRight' : ''}
                        ref={techLogoRef}
                        key={tech.name}
                      >
                        <img src={tech.logo} alt={tech.name} />
                      </li>
                    ),
                )}
                <hr />
              </ul>
            </TabPanel>
          </div>
        </TabContext>
      </Container>
    </Techs>
  );
};

export default Technologies;
