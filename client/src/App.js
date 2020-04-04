import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NoMatch } from './components/NoMatch/NoMatch';
import { Dashboard } from './components/Dashboard/Dashboard';
import { SignIn } from './components/SignIn/SignIn';
import { Register } from './components/Register/Register';
import { Nav } from './components/Nav/Nav';

const App = () => {
    return (
        <div>
            <Router>
                <Nav />

                <Switch>
                    <Route exact path='/' component={SignIn} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact component={NoMatch} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
