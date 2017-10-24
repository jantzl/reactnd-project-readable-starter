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
      <div className="container">
        <header className="nav">
					<h1 className="App-title">Post and Comment</h1>
        </header>

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

