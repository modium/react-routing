import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Polls from './Polls'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

ReactDOM.render(
    <Router>
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <NavLink to="/" className="navbar-brand">Affogato</NavLink>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="activeNav" to="/polls">Polls</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
        <Route exact path="/" component={Home}/>
    <Route path="/polls" component={Polls} history={history}/>
      </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
