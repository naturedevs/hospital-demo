import React, {useState} from 'react'
import {MapContainer, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';
import { Radio, Typography, Input, Button, Collapse, Card, CardBody } from "@material-tailwind/react";
import { Select } from 'antd';
import Map from './../../components/SmallMap';
import {types} from "./../../global/type";
import './landingpage.css'

function Landingpage() {
  var center = {lat: localStorage.getItem('lati1'), lng: localStorage.getItem('long1')};
  const [zoom, setZoom] = useState(13);
  const [word, setWord] = React.useState("");
  const [radius, setRadius] = React.useState("");
  const data = [
    {
      "id": 0,
      "name" : "Lakewood at Lake Merced",
      "price": 3500,
      "x": 222,
      "y": 222,
      "title1": "2BD",
      "title12": "2CD",
      "brief" : "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "img" : "/images/people/people1.png"
    },
    {
      "id": 1,
      "name" : "Lakewood at Lake Merced",
      "price": 3500,
      "x": 222,
      "y": 222,
      "title1": "2BD",
      "title12": "2CD",
      "brief" : "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "img" : "/images/people/people2.png"
    },
    {
      "id": 2,
      "name" : "Lakewood at Lake Merced",
      "price": 3500,
      "x": 222,
      "y": 222,
      "title1": "2BD",
      "title12": "2CD",
      "brief" : "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "img" : "/images/people/people3.png"
    },
    {
      "id": 3,
      "name" : "Lakewood at Lake Merced",
      "price": 3500,
      "x": 222,
      "y": 222,
      "title1": "2BD",
      "title12": "2CD",
      "brief" : "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "img" : "/images/people/people4.png"
    },
    {
      "id": 4,
      "name" : "Lakewood at Lake Merced",
      "price": 3500,
      "x": 222,
      "y": 222,
      "title1": "2BD",
      "title12": "2CD",
      "brief" : "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "img" : "/images/people/people5.png"
    },
    {
      "id": 5,
      "name" : "Lakewood at Lake Merced",
      "price": 3500,
      "x": 222,
      "y": 222,
      "title1": "2BD",
      "title12": "2CD",
      "brief" : "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "img" : "/images/people/people6.png"
    },
    {
      "id": 6,
      "name" : "Lakewood at Lake Merced",
      "price": 3500,
      "x": 222,
      "y": 222,
      "title1": "2BD",
      "title12": "2CD",
      "brief" : "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      "img" : "/images/people/people7.png"
    }

  ]
  const onRadius = (e) => {
      setRadius(e.target.value);
  };
  
  const onSelect = (e) => {
      setWord(e);
  };
  function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }
  center = {lat: localStorage.getItem('lati'), lng: localStorage.getItem('long')};
  return(
    <>
      <div className = "md:flex w-full px-3 overflow-hidden h-[calc(100vh-120px)]">
        <div className="md:w-full overflow-hidden h-[calc(100vh-180px)] md:h-auto px-3 pt-3 rounded-lg absolute top-12 md:top-auto bottom-0 left-0 md:left-auto right-0 md:right-auto md:relative z-10 ">
          <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={true}
            attributionControl={false}
            // style={{position: 'fixed', width: 735, height: 500}}
            className='w-full h-full relative z-0'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>              
          </MapContainer>
          <div className="left-0 right-0 top-8 z-10 absolute">
            {/* <div className="w-full pr-6 visible lg:invisible h-0 lg:h-auto">
              <div className='w-[70%] flex content-right float-right'>
                <p className="text-black text-lg mr-3 pt-1">
                  Radius:
                </p>
                <Input 
                  type="number" 
                  label="Input Radius(40 Km)"
                  onChange={onRadius}
                  value={radius}
                  className="p-0 w-[calc(80%)]"
                />
              </div>
              <div className='w-[70%] flex float-right'>
                <p className="text-black text-lg ml-5 mr-3 pt-1">
                  Type:
                </p>
                <Select 
                  label="Type" 
                  onChange={onSelect} 
                  name="type"
                  value={word}
                  options={types}
                  defaultValue='all'
                  style={{ marginTop: 2, minHeight: 40 }}
                  className=" w-full p-0"
                />
              </div>
              <div className='w-full float-right'>
                <button
                  className='w-[calc(70%-75px)] float-right mt-2 h-[40px] rounded-md bg-blue-700' 
                >Search</button>
              </div>
              
            </div> */}
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex pr-3 invisible lg:visible h-0 lg:h-auto">
            <p className="text-black text-lg mr-3 pt-1">
              Radius:
            </p>
            <Input 
              type="number" 
              label="Input Radius(40 Km)"
              onChange={onRadius}
              value={radius}
              className="p-0"
            />
            <p className="text-black text-lg ml-5 mr-3 pt-1">
              Type:
            </p>
            <Select 
              label="Type" 
              onChange={onSelect} 
              name="type"
              value={word}
              options={types}
              defaultValue='all'
              style={{ marginTop: 2, minHeight: 40, minWidth: 100 }}
              className="mr-5"
            />
            <Button
              color="blue"
              size="sm"
              className="rounded m-[2px]"
            >
              Search
            </Button>
          </div>
          <div className="bg-white bottom-0 md:bottom-auto w-full h-[calc(100vh-430px)] md:h-full md:w-full rounded-xl absolute md:relative z-20 overflow-y-auto pb-10 pr-3 md:pr-0">
            <div className="w-full ">
              {data.map((item, index) => (
                <div key={index} className="shadow-xl p-4 flex h-40 md:h-44 rounded-xl border-[1px] my-2 mr-3">
                  <img src={item.img} className="object-cover w-40 rounded-xl"/>
                  <div className="px-4 overflow-hidden">
                    <div className="flex w-full">
                      <p className="w-full text-black text-left text-sm md:text-xl">{"$"+item.price+"/month"}</p>
                      <p className="text-right text-black text-sm md:text-xl zmdi zmdi-favorite-outline" />
                    </div>
                    <div className="w-full">
                      <p className="w-full text-black text-left text-xs md:text-lg">{item.name}</p>
                      <p className="w-full pb-3 text-gray-500 text-sm md:text-md overflow-hidden">{truncateText(item.brief, 100)}</p>
                      <div className="w-[500px] h-[1px] bg-gray-500 my-1"/>   
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