import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NotFound extends Component {
  render() {

    return (
      <div className="container">
				<div>There is no page here. <NavLink to='/'>Please go back to the start.</NavLink></div>
      </div>
    )
  }
}

export default NotFound

