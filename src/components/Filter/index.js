import './index.css'
import React from 'react'

class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <form onSubmit={this._submit}>
          <input type="text" ref="q" defaultValue={this.props.initValue}/>
          <button type="submit">
            Search
          </button>
        </form>
      </div>
      )
  }

  _submit = (e) => {
    e.preventDefault()
    this.props.onSubmit && this.props.onSubmit(this.refs.q.value)
  }
}

export default Filter