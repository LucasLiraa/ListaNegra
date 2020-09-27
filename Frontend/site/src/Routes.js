import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicial from './Pages/Inicial'
import Cadastrar from './Pages/Cadastrar'
import Consultar from './Pages/Consultar'
import Alterar from './Pages/Alterar'

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Inicial} />
                <Route path="/Cadastrar" component={Cadastrar} />
                <Route path="/Consultar" component={Consultar} />
                <Route path="/Alterar" component={Alterar} />
            </Switch>
        </BrowserRouter>
    )
}