import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import * as campgroundsJSON from "../../../public/campgrounds.json";
const campgrounds = campgroundsJSON.campgrounds;

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
  const [currPosition, setCurrPosition] = useState([53, -127] as LatLngExpression)<LatLngExpression>;
  const [displayData, setDisplayData] = useState(campgrounds);

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
            <Marker position={currPosition}>
              <Popup>
                Current position
              </Popup>
            </Marker>

            {
              displayData.map((site, index) => (
                <Marker key={index} position={{lat: site?.geo?.latitude, lng: site?.geo?.longitude}}>
                  <Popup>
                    <h4>
                      {site?.name}
                    </h4>
                    {site?.description}
                  </Popup>
                </Marker>
              ))
            }
        </MapContainer>
        </div>
      </FlexGrid>
    </>
  );
};

export default Home;
