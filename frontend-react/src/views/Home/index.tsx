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
  // const [currPosition, setCurrPosition] = useState([53, -127] as LatLngExpression)<LatLngExpression>;
  const [displayData, setDisplayData] = useState(campgrounds);
  const [formToggle, setFormToggle] = useState(true);
  const [mapToggle, setMapToggle] = useState(true);

  const Landing: React.FC = () => {
    return (
      <>
        <FlexGrid className="mainContainer">
          <form>
          <label>
            Select A Park:
            <select name="park">
              <option value="all-parks">All Parks</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
            </select>
          </label>
          <label>
            Park Region:
            <select name="region">
              <option value="southern-interior">Southern Interior</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
            </select>
          </label>
          <label>
            Date From:
            <input type="date" name="name" />
          </label>
          <label>
            Date To:
            <input type="date" name="name" />
          </label>
          <label>
            Nights:
            <input type="number" name="name" />
          </label>
          <label>
            Equipment:
            <input type="text" name="name" />
          </label>
          <label>
            Party:
            <input type="text" name="name" />
          </label>
            <Button onClick={() => setFormToggle(false)}>Test</Button>
          </form>
        </FlexGrid>
      </>
    );
  };

  const Toggles: React.FC = () => {
    return (
        <div className="toggles">
          <Button className="toggle-button" onClick={() => {setMapToggle(true)}}>Map</Button>
          <Button className="toggle-button" onClick={() => {setMapToggle(false)}}>Campground</Button>
        </div>
    );
  };

  const MapStuff: React.FC = () => {
    return (
      <FlexGrid className="mapContainer">
      <div className="map-container">
        <MapContainer center={[53, -127]} zoom={6} scrollWheelZoom={true} className="map">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            displayData.map((site, index) => (
              <Marker key={index} position={{lat: site?.geo?.latitude, lng: site?.geo?.longitude}}>
                <Popup>
                  <h4>
                    {site?.name}
                  </h4>
                  <Button onClick={() => {
                    setMapToggle(false);
                  }}>details</Button>
                </Popup>
              </Marker>
            ))
          }
        </MapContainer> 
      </div>
    </FlexGrid>
    );
  };

  const CampStuff: React.FC = () => {
    return (
      <div className="flexible">
        <div>
          {/* here goes the two images */}
        </div>
        <div>
          {/* here goes the details */}
        </div>
      </div>
    );
  };

  return (
    <>
      <BCHeader />
      <FlexGrid className="mainContainer">
        <div>
          <h1 data-testid="home-title">BC Campgrounds</h1> 
          {
            formToggle && <Landing></Landing>
          }
          {
            !formToggle 
            &&
            <>
              <Toggles></Toggles>
              {mapToggle ? <MapStuff></MapStuff> : <CampStuff></CampStuff>}
            </>
          }
          </div>
      </FlexGrid>
    </>
  );
};

export default Home;
