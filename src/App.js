import React from 'react';

import Home from './pages/Home';
import Editar from './pages/Editar';
import Adicionar from './pages/Adicionar';
import { HashRouter, Route, Switch } from 'react-router-dom';

//https://produtos-apirest.herokuapp.com/swagger-ui.html#/


export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/editar/:prodId" component={Editar} />
        <Route exact path="/adicionar" component={Adicionar} />
      </Switch>
    </HashRouter>
  );
}
