import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Forum } from './pages/Forum';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { NoMatch } from './pages/NoMatch';
import { Profile } from './pages/Profile';
import { MyLists } from './pages/MyLists';
import { PrivateRoute } from './utils/PrivateRoute';

const App = () => {
    return (
        <Router>
            <Nav />
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/search' component={Search} />
                    <Route exact path='/forum' component={Forum} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/profile' component={Profile} />
                    <PrivateRoute exact path='/my-lists' component={MyLists} />
                    <Route exact component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
