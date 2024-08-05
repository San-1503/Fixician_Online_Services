/*import ReactDOM from "react-dom/client";*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './home.js';
import Services from './services.js';
import Contact from "./contact.js";
import Client from "./client.js";
import Appointments from "./book.js";
import Add from "./add.js";
import Delete from "./delete.js"; 
import Success from "./success.js";
import Success2 from "./success2.js";
import React, {useEffect, useState} from 'react';

function App() {
  
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client" element={<Client />} />
          <Route path="/book" element={<Appointments />} />
          <Route path="/add" element={<Add />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/success" element={<Success />} />
          <Route path="/success2" element={<Success2 />} />
      </Routes>
    </BrowserRouter>
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;

