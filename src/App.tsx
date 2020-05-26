import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css';
import './css/vendor/bootstrap/css/bootstrap.min.css';
import './css/main.css';

import Inicio from './views/inicio';
import loginView from './views/login';
import AboutUs from './views/AboutUs';
import createCliente from './views/create-cliente';
import ClientesView from "./views/get-clientes";
import create_Contrato from "./views/create-contrato";
import CarritoView from "./views/carrito";

const App: React.FC = () => (
  <BrowserRouter>
      <Switch>
      <Route path="/clientes/new" exact component={createCliente}/>
      <Route path="/clientes/update/:id" exact component={createCliente}/>
      <Route path="/clientes" exact component={ClientesView}/>
      <Route path="/contratos/new" exact component={create_Contrato}/>
      <Route path="/" exact component ={Inicio}/>
      <Route path="/login" exact component = {loginView}/>
      <Route path="/carrito/:id" exact component = {CarritoView}/>
      <Route path="/login/:correo/:contra" exact component = {loginView}/>
      <Route path="/AboutUS" exact component = {AboutUs}/>
      </Switch>
  </BrowserRouter>
  
);

export default App;
