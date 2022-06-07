import React from 'react';
import './App.css';
import Header from "./components/Header"
import Main from './views/home/Main';
import ModelS from './views/home/pages/Models/Model S/ModelS';
import ModelX from './views/home/pages/Models/Model X/ModelX';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Pages from './views/home/pages/Pages';
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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
