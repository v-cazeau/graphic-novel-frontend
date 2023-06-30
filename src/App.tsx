import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import VisualOne from './pages/VisualOne'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={ <Homepage /> } />
        <Route path="/episode-1" element={ <VisualOne /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
