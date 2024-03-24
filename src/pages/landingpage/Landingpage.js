import React, {useState, useEffect, useRef} from 'react'
import {MapContainer, TileLayer} from 'react-leaflet';
import { Switch, } from "@material-tailwind/react";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Dropdown from '../../components/dropdown/Dropdown';
import {DatePicker, Input} from "antd"
import { SearchOutlined } from '@ant-design/icons';
import Header from '../../components/Header';
import {types} from "./../../global/type";
import './landingpage.css'
import dayjs from 'dayjs';
import data from './../../global/people.json'

function Landingpage() {
  var center = {lat: localStorage.getItem('lati1'), lng: localStorage.getItem('long1')};
  const [yPosition, setYPosition] = useState(350);
  const [zoom, setZoom] = useState(13);
  const [dateModalShow, setDateModalShow] = useState(true)
  const [cattegoryModalShow, setCategoryModalShow] = useState(false)
  const people = data.data
  const ref = useRef(null);
  const [value, setValue] = React.useState(dayjs('2022-04-17'));
  const [dateValue, setDateValue] = React.useState(dayjs('2022-04-17'));

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('touchstart', onTouchStart, false);
      return () => element.removeEventListener('touchstart', onTouchStart);
    }
  }, [yPosition]);

  const onTouchStart = (event) => {
    event.preventDefault();
    const startY = event.touches[0].clientY - yPosition;

    const onTouchMove = (event) => {
      const newY = event.touches[0].clientY - startY;
      if(newY > 118 && newY < screen.height-110) setYPosition(newY);

    };

    const onTouchEnd = () => {
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);
 };
 
  const searchbarHeight = `${yPosition-120}px`
  
  function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  }
  center = {lat: localStorage.getItem('lati'), lng: localStorage.getItem('long')};
  return(
    <>
      {dateModalShow && (
        <>
          <div 
            className='absolute left-0 right-0 bottom-0 top-0 md:hidden z-[100] bg-black opacity-65'
            onClick={()=> setDateModalShow(false)}
          >
          </div>   
          <div className='absolute left-1 right-1 z-[101] top-[200px]'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div className='bg-white  rounded-xl overflow-hidden'>
                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                <div className='w-full pb-4 flex'>
                  <div className='flex mx-auto space-x-3'>
                    <button 
                      className='bg-[#8ABF3C] py-1 w-[100px] rounded-lg'
                      onClick={()=>{
                        setDateValue(value)
                        setDateModalShow(false)
                      }}
                    >
                      Okay
                    </button>
                    <button 
                      className='bg-red-300 py-1 w-[100px] rounded-lg'
                      onClick={()=>setDateModalShow(false)}
                    >
                      Close
                    </button>
                  </div>
                  <button></button>
                </div>
              </div>
            </LocalizationProvider>
          </div>
          
          </>
      )}
      <div className='w-full relative top-0 z-100'>
        <Header />
      </div>
      <div className = "w-full flex relative sm:relative h-[calc(100vh-90px)] lg:space-x-5  px-4 z-0" >
        <div  className={`mapContainerDiv w-full overflow-hidden md:h-full rounded-lg top-0 md:top-auto absolute bottom-0 left-0 md:left-auto right-0 md:right-auto md:relative z-10`}>
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
          <div 
            ref={ref} 
            id='bar' 
            style={{ top: searchbarHeight}} 
            className='absolute bottom-[20px] md:invisible bg-white left-0 right-0 w-full cursor-move rounded-t-lg border-t-[2px] border-gray-700'
          >
            <div className='w-full h-[2px] visible pt-3 sm:hidden'/>
              <div className='w-full flex'>
              <div className='m-auto w-[32px] pt-1 h-2'>
                <div className='w-full h-[2px] bg-black my-[2px]'/>
                <div className='w-full h-[2px] bg-black my-[2px]'/>
              </div>
            </div>
            <div className="w-full px-3 justify-between visible md:invisible mt-2 relative space-y-2">  
              <div className='w-full flex '>
                <Input 
                  placeholder="Search by Address"
                  // onSearch={onSearch}
                  style={{
                    height: 40,
                  }}
                  suffix={<SearchOutlined />}
                />
              </div>
              <div className='w-full flex'>
                <Dropdown/>
                <div className='w-full'>
                  <DatePicker 
                    size='large'
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              {/* <div className='w-full flex'>
                <div className=' flex items-center mx-auto'>
                  <div className='pl-2'>
                    <Switch 
                      color='green'
                      defaultChecked
                    />
                  </div>
                  <p className='text-black text-sm ml-2 text-right pt-[px]'>
                    Save Search
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full  justify-between px-5 h-0 md:h-auto lg:flex sm:visible bg-white z-100 space-y-1">
            <div className='xl:flex'>
              <div className='w-auto'>
                <Input 
                  placeholder="Search by Address"
                  // onSearch={onSearch}
                  style={{
                    height: 40
                  }}
                  suffix={<SearchOutlined />}
                />  
              </div>
              <div className='flex w-auto xl:px-2'>
                <Dropdown />
                <div className='w-full'>
                  <DatePicker 
                    size='large'
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            {/* <div className='w-full md:w-auto flex'>
              <div className='w-auto flex items-center ml-auto'>
                <Switch 
                  color='green'
                  defaultChecked
                />
                <p className='text-black text-sm lg:text-lg text-right ml-2 '>
                  Save Search
                </p>
              </div>
            </div> */}
          </div>
          <div className={`bg-white w-full invisible sm:visible md:h-full rounded-xl sm:static right-0 pl-5 z-20 overflow-y-auto pb-10 md:pr-0`}>
            <div className="w-full">
              {people.map((item, index) => (
                <div key={index} className="shadow-xl p-4 sm:flex sm:h-40 rounded-xl border-[1px] my-2 mr-3">
                  <div className='w-full sm:w-auto justify-center content-center flex sm:static'>
                    <img src={item.img} className="object-cover w-36 rounded-full sm:rounded-xl mb-5 sm:mb-auto sm:mx-auto"/>
                  </div>
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
        <div className={`z-50 absolute visible md:invisible bg-white left-0 right-0 bottom-0 overflow-y-auto px-3 `} style={{ top: `${yPosition}px` }}>
   
          <div className="w-full ">
            {people.map((item, index) => (
              <div key={index} className="shadow-xl p-4 sm:flex sm:h-40 rounded-xl border-[1px] my-2 mr-3">
                <div className='w-full sm:w-auto justify-center content-center flex sm:static'>
                  <img src={item.img} className="object-cover w-36 rounded-full sm:rounded-xl mb-5 sm:mb-auto sm:mx-auto"/>
                </div>
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
    </>
  )
}

export default Landingpage;