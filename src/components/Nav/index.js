import React from 'react'
import { IndexLink, Link } from 'react-router'
import './index.css'

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <ul className="nav-items">
          <li className="nav-item"><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
          <li className="nav-item"><Link activeClassName="active" to="/page-1">Page1</Link></li>
          <li className="nav-item"><Link activeClassName="active" to="/page-2">Page2</Link></li>
          <li className="nav-item"><Link activeClassName="active" to="/page-3">Padsadsdge3</Link></li>
        </ul>
      </div>
      )
  }
}

export default Nav