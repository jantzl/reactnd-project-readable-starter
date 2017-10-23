import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, ProgressBar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getPosts } from '../actions/'
import PostEntry from './PostEntry'


class PostList extends Component {
	static propTypes = {
		selectedCategory: PropTypes.string.isRequired,
		posts: PropTypes.array.isRequired,
		isLoading: PropTypes.bool.isRequired,
	}

	componentDidMount() {
		const { selectedCategory } = this.props
		this.props.fetchData()
	}

	render () { 
		const { selectedCategory, posts, isLoading } = this.props
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
				</div>
				<Table bordered hover responsive>
					<thead>
						<tr>
							<th>Title</th>
							<th>Body</th>
							<th>Author</th>
							<th>Category</th>
							<th>Votescore</th>
							<th>Timestamp</th>
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
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	console.log('state', state);
	/*
	console.log('posts', state.posts);
	const { selectedCategory, postsByCategory } = state

	let result = {
		selectedCategory: state.selectedCategory,
		posts: state.posts.items, 
		isLoading: state.posts.isLoading
	}

	console.log('result', result);

	return result
	*/

	return {
		selectedCategory: state.selectedCategory,
		posts: state.posts.items, 
		isLoading: state.posts.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: () => dispatch(getPosts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
