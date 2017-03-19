import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
// add react router
import { Router, browserHistory } from 'react-router'
import App from './App'
import Home from './pages/Home'

const rootRoute = {
  childRoutes: [
    {
      path: '/',
      component: App,
      indexRoute: {
        component: Home
      },
      childRoutes: [
        require('./routes/Page1'),
        require('./routes/Page2'),
        require('./routes/Page3')
      ]
  } ]
}


ReactDOM.render(
  <Router
    history={browserHistory}
    routes={rootRoute}
  />,
  document.getElementById('root')
)
