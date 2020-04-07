import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NoMatch } from './components/NoMatch/NoMatch';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Nav } from './components/Nav/Nav';
import { SearchContextProvider } from './context/Contexts/SearchContext';

const App = () => {
    return (
        <div>
            <Router>
                <Nav />

                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <SearchContextProvider>
                        <Route exact path='/dashboard' component={Dashboard} />
                    </SearchContextProvider>
                    <Route exact component={NoMatch} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
