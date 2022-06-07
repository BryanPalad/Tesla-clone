import React from 'react';
import './App.css';
import Header from "./components/Header"
import Main from './views/home/Main';
import ModelS from './views/home/pages/Models/Model S/ModelS';
import ModelX from './views/home/pages/Models/Model X/ModelX';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Pages from './views/home/pages/Pages';
import ModelY from './views/home/pages/Models/Model Y/ModelY';
import SolarRoofs from './views/home/pages/SolarRoofs/Solarroofs';
import Solarpanel from './views/home/pages/SolarPanels/Solarpanel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/support' element={<Pages/>}/>
        <Route path='/models' element={<ModelS/>}/>
        <Route path='/modelx' element={<ModelX/>}/>
        <Route path='/modely' element={<ModelY/>}/>
        <Route path='/solarroofs' element={<SolarRoofs/>}/>
        <Route path='/solarpanels' element={<Solarpanel/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
