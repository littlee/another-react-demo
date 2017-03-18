import React, { Component } from 'react'
import Nav from './components/Nav'
import './app.css'

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
