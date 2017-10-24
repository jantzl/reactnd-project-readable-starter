import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Glyphicon, ProgressBar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addPost, getPosts, showModal } from '../actions/'
import PostEntry from './PostEntry'
import PostModal from './PostModal'

class PostList extends Component {
	static propTypes = {
		selectedCategory: PropTypes.string.isRequired,
		posts: PropTypes.array.isRequired,
		isLoading: PropTypes.bool.isRequired,
	}

	componentDidMount() {
		const { selectedCategory, fetchData } = this.props
		fetchData()
	}

	render () { 
		const { selectedCategory, posts, isLoading, openModal } = this.props
		const isEmpty = posts.length === 0

		// if no posts, show loading state
		if (isEmpty) {
			return (
				<ProgressBar active now={100} />
			);
		} 

		return (
			<div className='post-list-container'>
				<div className='post-fixme'>
					FIXME: also needs a sort
					FIXME post list goes here
          <Button bsSize="small" onClick={openModal}>
            Create Post <Glyphicon glyph="plus-sign"/>
          </Button>
				</div>
				<Table bordered hover responsive>
					<thead>
						<tr>
							<th>Title</th>
							<th>Author</th>
							<th>Number of Comments</th>
							<th>Number of Votes</th>
							<th>Up/Down Vote</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{ posts.map((post, index) => {
							return (
								<PostEntry key={post.id} post={post} />
							);
						})}
					</tbody>
				</Table>
				<PostModal />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		selectedCategory: state.categories.selectedCategory,
		posts: Object.values(state.posts.itemsById), 
		isLoading: state.posts.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		openModal: () => dispatch(showModal()),
		fetchData: () => dispatch(getPosts()),
    createPost: (data) => dispatch(addPost(data)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
