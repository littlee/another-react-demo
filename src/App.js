import React, { Component } from 'react'
import './app.css'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default App
