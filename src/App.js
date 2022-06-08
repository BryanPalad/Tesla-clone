import React from 'react';
import './App.css';
import Header from "./components/Header"
import Main from './views/home/Main';
import ModelS from './views/home/pages/Models/Model S/ModelS';
import Model3 from './views/home/pages/Models/Model 3/Model3';
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
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/support' element={<Pages/>}/>
        <Route exact path='/models' element={<ModelS/>}/>
        <Route exact path='/model3' element={<Model3/>}/>
        <Route exact path='/modelx' element={<ModelX/>}/>
        <Route exact path='/modely' element={<ModelY/>}/>
        <Route exact path='/solarroofs' element={<SolarRoofs/>}/>
        <Route exact path='/solarpanels' element={<Solarpanel/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
