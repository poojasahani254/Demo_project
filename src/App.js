import React from 'react';
import logo from './logo.svg';
import './App.css';
import Route from "./Routes/Router";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Route />
      </BrowserRouter>

  );
}

export default App;
