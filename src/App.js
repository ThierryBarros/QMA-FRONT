import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import PaginaInicial from  './pages/PaginaInicial';
import NotFoundPage from './pages/NotFoundPage';
import PaginaLogar from './pages/PaginaLogar';
import Alunos from './pages/Alunos';

export class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <main>
            <Switch>
                <Route exact path="/" component={PaginaInicial} />
                <Route exact path="/logar" component={PaginaLogar} />
                <Route exact path="/alunos" component={Alunos} />
                <Route component={NotFoundPage} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);
