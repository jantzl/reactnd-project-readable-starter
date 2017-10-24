import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryFilter from './CategoryFilter'
import PostList from './PostList'
import { getCategories } from '../actions/'
import './App.css'

class App extends Component {
	//FIXME - move this out into redux
	componentDidMount() {
    const { fetchData } = this.props
    fetchData()
	}

  render() {
		const { categories } = this.props

    return (
      <div className="container">
        <header className="nav">
					<h1 className="App-title">Post and Comment</h1>
        </header>

				<CategoryFilter categories={categories} />

				<PostList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(getCategories()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

