import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { HashRouter,Routes, Route } from 'react-router-dom'

/****  Componentes  ****/
import GateWay from './Components/GateWay'
import Pokedex from './Components/Pokedex'
import ProtectedRoutes from './Components/ProtectedRoutes'
import CharacterDetail from './Components/CharacterDetail'
//image





function App() {


  return (
    <div className='App'>
      
      <HashRouter>
        <Routes>
          <Route path="/" element={<GateWay />} />
          <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<CharacterDetail/>} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}


export default App
