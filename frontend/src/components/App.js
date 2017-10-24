import React, { Component } from 'react'
import './App.css'
import CategoryFilter from './CategoryFilter'
import PostList from './PostList'
import * as api from '../utils/api'

class App extends Component {
	state = {
		categories: [],
	}

	componentDidMount() {
		api.fetchCategories().then((categories) => {
			this.setState( {categories: categories})
		});
	}

  render() {
		const {categories} = this.state

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

export default App;
