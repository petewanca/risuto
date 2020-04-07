import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { Home } from './components/Pages/Home';
import { Forum } from './components/Pages/Forum';
import { Contact } from './components/Pages/Contact';
import { About } from './components/Pages/About';
import { Login } from './components/Pages/Login';
import { Register } from './components/Pages/Register';
import { Results } from './components/Pages/Results';
import { NoMatch } from './components/Pages/NoMatch';
import { Profile } from './components/Pages/Profile';
import { MyLists } from './components/Pages/MyLists';

const App = () => {
    return (
        <div>
            <Router>
                <Nav />

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/forum' component={Forum} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/results' component={Results} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/my-lists' component={MyLists} />
                    <Route exact component={NoMatch} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
