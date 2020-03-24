import React from 'react';
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
