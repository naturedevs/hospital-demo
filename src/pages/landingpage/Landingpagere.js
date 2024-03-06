import React, {useState} from 'react'
import {MapContainer, TileLayer} from 'react-leaflet';
import { Switch  } from "@material-tailwind/react";
import { Select } from 'antd';
import Map from '../../components/SmallMap';
import Header from '../../components/Header';
import {types} from "../../global/type";
import './landingpage.css'
import data from '../../global/people.json'

function Landingpagere() {
  var center = {lat: localStorage.getItem('lati1'), lng: localStorage.getItem('long1')};
  const [zoom, setZoom] = useState(13);
  const [word, setWord] = React.useState("");
  const people = data.data
  
  const onSelect = (e) => {
      setWord(e);
  };
  function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }
  center = {lat: localStorage.getItem('lati'), lng: localStorage.getItem('long')};
  return(
    <>
      <div className='relative h-full overflow-hidden'>
        <div className='absolute right-0 top-0 left-0 z-20'>
          <Header />
        </div>
        <div className='w-full flex relative z-0'>
          <div className='map w-full'>
            <MapContainer
              center={center}
              zoom={zoom}
              scrollWheelZoom={true}
              attributionControl={false}
              // style={{position: 'fixed', width: 735, height: 500}}
              className='w-full h-full relative -z-10'>
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>              
            </MapContainer>
          </div>
          <div className='list w-full'>
            <div className="w-full h-[calc(100vh-120px)] overflow-y-auto">
              {people.map((item, index) => (
                <div key={index} className="shadow-xl p-4 flex h-40 md:h-44 rounded-xl border-[1px] my-2 mr-3">
                  <img src={item.img} className="object-cover w-36 rounded-xl"/>
                  <div className="px-4 overflow-hidden w-full">
                    <div className="flex w-full">
                      <p className="w-full text-black text-left text-sm md:text-xl">{"$"+item.price+"/month"}</p>
                      <p className="text-right text-black text-sm md:text-xl zmdi zmdi-favorite-outline" />
                    </div>
                    <div className="w-full">
                      <p className="w-full text-black text-left text-xs lg:text-lg">{item.name}</p>
                      <p className="w-full pb-3 text-gray-500 text-sm md:text-md overflow-hidden">{truncateText(item.brief, 100)}</p>
                      <div className="w-full justify-end h-[1px] bg-gray-500 my-1"/>
                      <p className="w-full text-gray-500 text-left text-xs md:text-md">{item.title1+" | "+item.title12+" | "+" 9791 sqft"}</p>            
                    </div>   
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landingpagere;