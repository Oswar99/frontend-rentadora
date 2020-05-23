import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css';
import './css/vendor/bootstrap/css/bootstrap.min.css';
import './css/main.css';

import Inicio from './views/inicio';
import LoginEmpleado from './views/LoginEmpleados';
import AboutUs from './views/AboutUs';
import create_Cliente from './views/create-cliente';
import ClientesView from "./views/get-clientes"

const App: React.FC = () => (
  <BrowserRouter>
      <Switch>
      <Route path="/clientes/new" exact component={create_Cliente}/>
      <Route path="/clientes/update/:id" exact component={create_Cliente}/>
      <Route path="/clientes" exact component={ClientesView}/>

      <Route path="/" exact component ={Inicio}/>
      <Route path="/Login/Empleado" exact component = {LoginEmpleado}/>
      <Route path="/AboutUS" exact component = {AboutUs}/>
      </Switch>
  </BrowserRouter>
  
);

export default App;
