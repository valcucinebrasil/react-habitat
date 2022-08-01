import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Quemsomos from '../pages/Quemsomos'
import Contato from '../pages/Contato'
import Home from '../pages/Home'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/Quemsomos" component={Quemsomos} />
        <Route exact path="/Contato" component={Contato} />
    </BrowserRouter>
);

export default Routes