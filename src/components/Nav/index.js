import React from 'react'
import { Link } from 'react-router'
import './index.css'

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <ul className="nav-items">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/page-1">Page1</Link></li>
          <li className="nav-item"><Link to="/page-2">Page2</Link></li>
        </ul>
      </div>
      )
  }
}

export default Nav