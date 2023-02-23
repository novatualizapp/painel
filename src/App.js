import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Paginas
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login'
import ListaUser from './Pages/ListaUser'
import PrivateRoute from './Components/Routes/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <Route component={ListaUser} path="/listauser" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
