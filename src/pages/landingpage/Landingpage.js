import React, {useState} from 'react'
import {MapContainer, TileLayer} from 'react-leaflet';
import { Switch  } from "@material-tailwind/react";
import { Select } from 'antd';
import Map from './../../components/SmallMap';
import Header from '../../components/Header';
import {types} from "./../../global/type";
import './landingpage.css'
import data from './../../global/people.json'
import Dropdown from '../../components/dropdown/Dropdown';

function Landingpage() {
  var center = {lat: localStorage.getItem('lati1'), lng: localStorage.getItem('long1')};
  const [zoom, setZoom] = useState(13);
  const [word, setWord] = React.useState("");
  const [mapOn, setMapOn] = useState(true);
  const [mouseDown, setMouseDown] = useState(false);



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
      <div className='w-full relative top-0 z-100'>
        <Header />
      </div>
      <div className = "w-full flex absolute sm:relative px-3 h-[calc(100vh-90px)] lg:space-x-5 z-0">
        <div className="mapContainerDiv w-full overflow-hidden h-[calc(100vh-210px)] md:h-auto rounded-lg top-0 md:top-auto absolute bottom-0 left-0 md:left-auto right-0 md:right-auto md:relative z-10">
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
        <div className="w-full">
          <div className="w-full  justify-between px-5 h-0 lg:h-auto hidden lg:flex lg:visible">  
            <div className='flex'>
              <Dropdown />
            </div>
            <div className='flex'>
              <Switch 
                color='green'
                defaultChecked
                
              />
              <p className='text-black text-lg text-right ml-2 pt-[6px]'>
                Save Search
              </p>
            </div>
          </div>
          <div className={`bg-white bottom-0 md:bottom-auto w-full h-[120px] md:h-full rounded-xl absolute md:static right-0 pl-5 z-20 overflow-y-auto pb-10 pr-3 md:pr-0`}>
            <div className='w-full cursor-move' >
              <div className='w-full h-[4px] bg-gray-800 visible md:hidden'/>
              <img src=''/>
            </div>
            <div className="w-full flex pr-3 justify-between visible lg:invisible h-auto lg:h-0 mt-4">  
              <div className='w-full flex'>
                <Dropdown />
              </div>
              <div className='flex min-w-[120px] float-right'>
                <Switch 
                  color='green'
                  defaultChecked
                />
                <p className='text-black text-sm ml-2 text-right pt-[10px]'>
                  Save Search
                </p>
              </div>
            </div>
            <div className="w-full ">
              {people.map((item, index) => (
                <div key={index} className="shadow-xl p-4 flex h-40 md:h-44 rounded-xl border-[1px] my-2 mr-3">
                  <img src={item.img} className="object-cover w-36 rounded-xl"/>
                  <div className="px-6 overflow-hidden w-full">
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

export default Landingpage;