import React from 'react';
import './App.css';
import Route from "./Routes/Router";
import {Router} from "react-router-dom";
import {createBrowserHistory} from 'history';
const history = createBrowserHistory()

function App() {
  return (
      <Router history={history}>
        <Route />
      </Router>
  );
}
export default App;
