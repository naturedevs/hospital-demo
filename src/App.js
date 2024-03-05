import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Wrapper } from './components/Wrapper';
import Header from './components/Header';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Landingpage from './pages/landingpage/Landingpage'

export default function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <div className="w-screen bg-[#F4F5F7] h-full overflow-x-hidden">
          <div className="max-w-screen-2xl mx-auto rounded-2xl bg-white h-screen shadow-xl">
            <Header />
            <Routes>
              <Route path="/landingpage" exact element= {<Landingpage />}/>
              <Route path="/" exact element={<Page1 />} />
              <Route path="/page2" exact element={<Page2 />} />
              <Route path="/page3" exact element={<Page3 />} />
            </Routes>
          </div>
        </div>
        
        
      </Wrapper>
    </BrowserRouter>
  )
}