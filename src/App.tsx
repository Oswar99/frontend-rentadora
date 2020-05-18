import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import create_Cliente from './views/create-cliente';

import './App.css';
import './css/vendor/bootstrap/css/bootstrap.min.css';
import './css/main.css';

const App: React.FC = () => (
  <BrowserRouter>
      <Switch>
      <Route path="/clientes/new" exact component={create_Cliente}/>
      </Switch>
  </BrowserRouter>
  
);

export default App;
