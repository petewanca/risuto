import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { Home } from './Pages/Home';
import { Search } from './Pages/Search';
import { Forum } from './Pages/Forum';
import { Contact } from './Pages/Contact';
import { About } from './Pages/About';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { NoMatch } from './Pages/NoMatch';
import { Profile } from './Pages/Profile';
import { MyLists } from './Pages/MyLists';

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
                    <Route exact path='/my-lists' component={MyLists} />
                    <Route exact component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
