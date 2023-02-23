import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAdmin } from '../../Utils';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

         // Mostra o componente apenas quando o usuário está logado
         // Caso contrário, redirecione o usuário para a página /signin
        <Route {...rest} render={props => (
            isAdmin() ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute;