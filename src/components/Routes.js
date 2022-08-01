import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Marcas from '../pages/Marcas'
import Contato from '../pages/Contato'
import Home from '../pages/Home'
import Quemsomos from '../pages/Quemsomos'
import Projetos from '../pages/Projetos'
import Parceiros from '../pages/Parceiros'
import Colecoes from '../pages/Colecoes'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/Marcas" component={Marcas} />
        <Route exact path="/Colecoes" component={Colecoes} />
        <Route exact path="/Projetos" component={Projetos} />
        <Route exact path="/Parceiros" component={Parceiros} />
        <Route exact path="/Quemsomos" component={Quemsomos} />
        <Route exact path="/Contato" component={Contato} />
    </BrowserRouter>
);

export default Routes