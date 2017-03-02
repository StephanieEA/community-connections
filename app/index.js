import { render } from 'react-dom'
import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router'
// import {Provider} from 'react-redux';

require('./reset.scss')
require('./styles.scss')

import Home from './components/home/home.js'
import App from './components/App/App.js'
import SeniorForm from './components/senior-form/senior-form.js'
// import store from '../../../app/store.js'

import style from './styles.scss'

const router = (
      // <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/sign-up' component={SeniorForm} />
          </Route>
        </Router>
      // </Provider>
)



render(router, document.querySelector('.application'));
