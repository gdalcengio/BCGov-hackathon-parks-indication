import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

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
        <div>
          <h1 data-testid="home-title">BC Campgrounds</h1> 
          <MapContainer center={[53, -127]} zoom={6} scrollWheelZoom={false} className="map">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
        </MapContainer>
        </div>
      </FlexGrid>
    </>
  );
};

export default Home;
