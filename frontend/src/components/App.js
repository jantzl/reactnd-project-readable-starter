import React, { Component } from 'react'
import './App.css'
//FIXME
//import { connect }  from 'react-redux'
//import { addPost } from '../actions'
//import { fetchAllPosts } from '../utils/api'
import CategoryFilter from './CategoryFilter'
import * as api from '../utils/api'

class App extends Component {
	state = {
		categories: [],
		posts: [],
		postModalOpen: false,
	}

	componentDidMount() {
		api.fetchCategories().then((categories) => {
			console.log(categories);
			this.setState( {categories: categories})
		});
	}

	openPostModal = () => this.setState(() => ({ postModalOpen: true}))
	closePostModal = () => this.setState(() => ({ postModalOpen: true}))

  render() {
    return (
      <div className="container">
        <header className="nav">
          <h1 className="App-title">Post and Comment</h1>
					<button
						className='create-post'
						onClick={this.openPostModal}>
							FIXME Post
					</button>
        </header>
				<CategoryFilter categories={this.state.categories} />
				<div className='post-list'>
					FIXME: also needs a sort
					FIXME post list goes here
				</div>
      </div>
    );
  }
}

//FIXME
/*
function mapDispatchToProps (dispatch) {
  return {
    createPost: (data) => dispatch(addPost(data)),
  }
}
*/

export default App;
