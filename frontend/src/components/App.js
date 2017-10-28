import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CategoryFilter from './CategoryFilter'
import PostList from './PostList'
import Post from './Post'
import { resetError } from '../actions/'
import './App.css'

class App extends Component {

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
		const { categories } = this.props

    return (
			<Router>
				<div className="container">
					<header className="nav">
						<h1 className="App-title">Post and Comment</h1>
					</header>
					<hr/>
					{ this.renderErrorMessage() }

					<CategoryFilter categories={categories} />

					<Switch>
						<Route exact name="index" path="/" component={PostList} />
						<Route path="/:category/:post_id" component={Post} />
						<Route path="/:category" component={PostList} />
					</Switch>	

				</div>
      </Router>
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
		resetErrorMessage: () => dispatch(resetError()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

