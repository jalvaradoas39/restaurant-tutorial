import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import NotFound from './NotFound';

const App = () => (
    <BrowserRouter>
        <Header />
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/signin' component={Signin} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </BrowserRouter>
);

export default App;
