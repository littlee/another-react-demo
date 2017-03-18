import React from 'react'
import './index.css'
import Filter from '../../components/Filter'
import { browserHistory } from 'react-router'

class Page1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    fetch('/data.json')
      .then((res) => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('error when fetch data.json')
      })
      .then((json) => {
        this.setState({
          list: json
        })
      })

  }

  render() {
    var q = this.props.location.query.q
    var list = this.state.list
    if (q) {
        list = list.filter((item) => {
        return item.name.indexOf(q) !== -1 || item.phone.indexOf(q) !== -1 || item.email.indexOf(q) !== -1
      })
    }

    var query = this.props.location.query

    return (
      <div className="page-1">
        <h1>Page 1 (Simple Data List with Filter)</h1>

        <Filter initValue={query && query.q} onSubmit={this._filterSubmit}/>
        <table className="page-1-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                  </tr>
                  )
              })
            }
          </tbody>
        </table>
      </div>
      )
  }

  _filterSubmit = (value) => {
    browserHistory.push({
      pathname: this.props.location.pathname,
      query: {
        q: value
      }
    })
  }
}

export default Page1