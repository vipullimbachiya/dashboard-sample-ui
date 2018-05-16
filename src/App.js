import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-block-ui/style.css';
import 'react-toastify/dist/ReactToastify.css';

import store from './Store';

import './assets/styles/ace-fonts.min.css';
import './assets/styles/ace-skins.min.css';
import './assets/styles/ace.min.css';
import './assets/styles/ace-part2.min.css';
import './assets/styles/ace-ie.min.css';
import './assets/styles/ace-rtl.min.css';

import './assets/styles/app.css';
import './assets/styles/login.css';
import './assets/styles/appHeader.css';
import './assets/styles/pageHeader.css';
import './assets/styles/sidebar.css';
import './assets/styles/dashboard.css';
import './assets/styles/modal.css';
import './assets/styles/notification.css';

import Login from './scenes/Login';
import Dashboard from './scenes/Dashboard';
import PageUnderConstruction from './scenes/PageUnderConstruction';
import FileUploader from './scenes/FileUploader';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route
              path="/under-construction"
              component={PageUnderConstruction}
            />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/upload/:id" component={FileUploader} />
            <Route path="/" component={Login} />
          </Switch>
          <ToastContainer position="top-right" className="toastify" />
        </Fragment>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
