import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useQuery } from 'react-query';
import L from 'leaflet';
import { getCountrySpecific } from '../utils/api';
interface CountryData {
    name: string;
    cases: number;
    active: number;
    deaths: number;
    lat: number;
    lon: number;
    countryInfo: {
      flag: string;
    };
  }
const CountryMap= () => {
    const {data } = useQuery('countrySpecific',getCountrySpecific);
    const customIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1088/1088372.png', // Replace with your GPS icon URL
        iconSize: [25, 25],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });
  return (
    <div id="map" className="p-4 rounded-md">
       <MapContainer center={[20, 0]} zoom={3} style={{ width: '100%', height: '300px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data?.map((countryData:any) => (
        <Marker
          key={countryData.country}
          position={[countryData.countryInfo.lat, countryData.countryInfo.long]}
          icon={customIcon}
        >
          <Popup>
            <div className='flex justify-center items-start flex-col'>
            <div className="font-bold">{countryData.country}</div>
            <div className='font-semibold'>Total Cases: {countryData.cases}</div>
            <div  className='font-semibold'>Active Cases: {countryData.active}</div>
            <div  className='font-semibold'>Recovered Cases: {countryData.recovered}</div>
            <div  className='font-semibold'>Deaths: {countryData.deaths}</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  )
}

const alertPopup = (country: CountryData) => {
    const { name, cases, active, deaths } = country;
    alert(
      `Country: ${name}\nTotal Cases: ${cases}\nActive Cases: ${active}\nDeaths: ${deaths}`
    );
  };

export default CountryMap