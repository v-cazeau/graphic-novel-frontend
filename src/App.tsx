import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';

function App() {
  return (
    <HashRouter>
      <Routes>        
        <Route path="/" element={ <Homepage /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
