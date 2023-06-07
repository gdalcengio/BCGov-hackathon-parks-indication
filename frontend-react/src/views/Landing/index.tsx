import React, { useState } from 'react';

import {
  Tile,
  Button,
  FlexGrid,
  Column,
  Row,
  Stack
} from '@carbon/react';
import BCHeader from '../../components/BCHeader';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <BCHeader />
      <FlexGrid className="mainContainer">
        <form>
          <input type="submit" value="submit" onSubmit={() => navigate('/home')}></input>
        </form>
      </FlexGrid>
    </>
  );
};

export default Landing;
