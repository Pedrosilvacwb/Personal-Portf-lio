import React from 'react';
import { Container, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Techs } from './style';
const Technologies = () => {
  const [value, setValue] = React.useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Techs>
        <h2>Tecnologias</h2>
        <TabContext value={value}>
          <div>
            <TabList
              sx={{
                '& button:active': { color: '#47D974' },
                '& button:hover': { color: '#47D974' },
                '& button:focus': { color: '#47D974' },
              }}
              TabIndicatorProps={{ sx: { backgroundColor: '#47D974' } }}
              onChange={handleChange}
            >
              <Tab className="techsBtn" label="Front-End" value="1" />
              <Tab className="techsBtn" label="Back-End" value="2" />
              <Tab className="techsBtn" label="UX/UI" value="3" />
            </TabList>
          </div>
          <div>
            <TabPanel value="1">HTML5</TabPanel>
            <TabPanel value="2">Node</TabPanel>
            <TabPanel value="3">Figma</TabPanel>
          </div>
        </TabContext>
      </Techs>
    </Container>
  );
};

export default Technologies;
