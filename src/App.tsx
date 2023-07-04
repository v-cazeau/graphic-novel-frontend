import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import VisualOne from './pages/VisualOne'
import VisualTwo from './pages/VisualTwo';
import VisualThree from './pages/VisualThree';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={ <Homepage /> } />
        <Route path="/visual-1" element={ <VisualOne /> } />
        <Route path="/visual-2" element={<VisualTwo/>} />
        <Route path="/visual-3" element={<VisualThree/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
