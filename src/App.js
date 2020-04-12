import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './global.css';
 
import Home from './components/Home';
import Detail from './components/Detail';

const App = () => {
    return(
        <BrowserRouter>
            <ul className="header">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/detail">Detail</Link></li>
            </ul>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/detail/:id'>
                    <Detail />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
