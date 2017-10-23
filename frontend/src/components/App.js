import React, { Component } from 'react'
import './App.css'
//FIXME
//import { connect }  from 'react-redux'
//import { addPost } from '../actions'
import Modal from 'react-modal'
import CategoryFilter from './CategoryFilter'
import PostList from './PostList'
import { Button, Glyphicon } from 'react-bootstrap'
import * as api from '../utils/api'

class App extends Component {
	state = {
		categories: [],
		postModalOpen: false,
	}

	componentDidMount() {
		api.fetchCategories().then((categories) => {
			this.setState( {categories: categories})
		});
	}

	openPostModal = () => this.setState(() => ({ postModalOpen: true}))
	closePostModal = () => this.setState(() => ({ postModalOpen: false}))

  render() {
		const {categories, postModalOpen} = this.state

    return (
      <div className="container">
        <header className="nav">
					<h1 className="App-title">Post and Comment</h1>
					<Button bsSize="small" onClick={this.openPostModal}>
						Create Post <Glyphicon glyph="plus-sign"/>
					</Button>
        </header>

				<CategoryFilter categories={categories} />

				<PostList />
				
				<Modal
					isOpen={postModalOpen}
					onRequestClose={this.closePostModal}
					contentLabel='Post Modal'
				>
					<div>
						<h2>Add a Post</h2>
						<form>
							<div>
							<input 
								className='post-title'
								type='text'
								placeholder='your title here'
							/>
							</div>
							<div>
							<input 
								className='post-author'
								type='text'
								placeholder='your name here'
							/>
							</div>
							<div>
							<textarea 
								className='post-text'
								placeholder='your post here'
							/>
							</div>
							<CategoryFilter categories={categories} />
							<button>FIXME Post</button>
							<button onClick={this.closePostModal}>Cancel</button>
						</form>
					</div>
				</Modal>
      </div>
    )
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
