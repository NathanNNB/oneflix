import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component = {Home} exact/>
      <Route path="/Cadastro/Video" component = {CadastroVideo} exact/>
      <Route path="/Cadastro/Categoria" component = {CadastroCategoria} exact/>
      <Route  component = {()=>(<diV>Página 404</diV>)} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


