import React from 'react';

import {
  Tile,
  Button,
  FlexGrid,
  Column,
  Row,
  Stack
} from '@carbon/react';
import BCHeader from '../../components/BCHeader';

const Home: React.FC = () => {

  return (
    <>
      <BCHeader />
      <FlexGrid className="mainContainer">
        <FlexGrid container="true" spacing={4}>
          <h1 data-testid="home-title">BC Campgrounds</h1> 
        </FlexGrid>
      </FlexGrid>
    </>
  );
};

export default Home;
