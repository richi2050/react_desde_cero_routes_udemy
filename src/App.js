import {Route, Link, BrowserRouter as Router, Switch, NavLink} from 'react-router-dom'
import Contacto from './components/Contacto'
import Inicio from './components/Inicio'
import Nosotros from './components/Nosotros'



function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <NavLink to='/' className='btn btn-dark' activeClassName='active'>
            Inicio
          </NavLink>
          <NavLink to='/contacto' className='btn btn-dark'>
            Contacto
          </NavLink>
          <NavLink to='/nosotros' className='btn btn-dark'>
            Nosotros
          </NavLink>

        </div>
        <hr/>
        <Switch>
          <Route path='/' exact>
            <Inicio></Inicio>
          </Route>
          <Route path='/contacto'>
            <Contacto></Contacto>
          </Route>
          <Route path='/nosotros'>
            <Nosotros></Nosotros>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
