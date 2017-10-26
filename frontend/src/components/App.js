import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryFilter from './CategoryFilter'
import PostList from './PostList'
import { getCategories, resetError } from '../actions/'
import './App.css'

class App extends Component {
	componentDidMount() {
    const { fetchData } = this.props
    fetchData()
	}

	renderErrorMessage() {
		const { errorMessage, resetErrorMessage } = this.props

		if (!errorMessage) {
			return null
		}

		return (
			<div style={{ backgroundColor: '#e99', padding: 10 }}>
				<b>{errorMessage}</b>
				{' '}
				<button onClick={()=>resetErrorMessage()}>
					Dismiss
				</button>
			</div>
		)
	}

  render() {
		const { categories, errors } = this.props

    return (
      <div className="container">
        <header className="nav">
					<h1 className="App-title">Post and Comment</h1>
        </header>
				<hr/>
				{ this.renderErrorMessage() }

				<CategoryFilter categories={categories} />

				<PostList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    errorMessage: state.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(getCategories()),
		resetErrorMessage: () => dispatch(resetError()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

