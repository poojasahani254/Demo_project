import React from 'react';
import './App.css';
import Route from "./Routes/Router";
import {BrowserRouter} from "react-router-dom";
// import { I18nextProvider } from 'react-i18next';
// import i18n from '../src/Components/CommonComponent/languages';

function App() {
  return (
    // <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
      // </I18nextProvider>

  );
}
export default App;
