import React from 'react';
import './App.css';
import Route from "./Routes/Router";
import {Router} from "react-router-dom";
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import configstore from '../src/Store/Store';

const history = createBrowserHistory();

const App = () =>{
  return (
      <Provider store={configstore}>
          <Router history={history}>
            <Route />
          </Router>
      </Provider>
  );
}

export default App;
