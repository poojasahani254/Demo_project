import React from 'react';
import './App.css';
import Route from "./Routes/Router";
import {BrowserRouter} from "react-router-dom";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory()

function App() {
  return (
      <BrowserRouter history={history}>
        <Route />
      </BrowserRouter>
  );
}
export default App;
