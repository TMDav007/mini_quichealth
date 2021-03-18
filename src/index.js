import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect} from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import history from './history';

import { ToastContainer, Slide } from 'react-toastify';

import './index.css';
//import App from './App';
import Body from './body/Body';
import Dashboard from './dashboard/Dashboard';

ReactDOM.render(
  <React.StrictMode>
      <React.Fragment>
        <Router history={history}>
          <Switch>
           {<Route exact path = '/' component={Body} /> }
            <Route exact path = '/register' component={Body} />
            <Route exact path = '/dashboard' component={Dashboard} />
            <Redirect to='/register' />
          </Switch>
        </Router>
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar transition={Slide}/>
      </React.Fragment>
    )
  </React.StrictMode>,
  document.getElementById('root')
);

