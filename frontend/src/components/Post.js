import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
	componentDidMount() {
    //const { fetchData } = this.props
    //fetchData()
	}

  render() {
		const { categories } = this.props

    return (
      <div>
				<h4>Post </h4>

				<div>FIXME</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)

