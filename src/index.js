import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// add react router
import { Router, browserHistory } from 'react-router'

const rootRoute = {
  childRoutes: [
    {
      path: '/',
      component: require('./App').default,
      childRoutes: [
        require('./routes/Page1'),
        require('./routes/Page2')
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
