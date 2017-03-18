import React from 'react'
import './index.css'
import _ from 'lodash'

const DELAY = 500
const COUNT = 500

class Block extends React.Component {
  render() {
    var val = (this.props.r * Math.random()).toFixed(10)
    return (
      <div className="page-2-block">
        {val}

        <div className="page-2-block-pop">
          {val}
        </div>
      </div>
      )
  }
}

class Page2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      r: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        r: Math.random()
      })
    }, DELAY)
  }

  render() {
    return (
      <div className="page-2">
        <h1>Page 2 (Why Virtual DOM ?)</h1>
        {
          _.range( COUNT ).map((item) => {
            return <Block key={item} r={this.state.r}/>           
          })
        }
      </div>
      )
  }
}

export default Page2