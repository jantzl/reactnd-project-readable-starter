import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from '../actions/'

class PostList extends Component {
	static propTypes = {
		selectedCategory: PropTypes.string.isRequired,
		posts: PropTypes.array.isRequired, 
		isFetching: PropTypes.bool.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		const { dispatch, selectedCategory } = this.props
		dispatch(getPosts())
	}

	render () { 
		const { selectedCategory, posts, isFetching } = this.props
		//const isEmpty = posts.length === 0
		return (
			<div className='post-list'>
				FIXME: also needs a sort
				FIXME post list goes here
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	console.log('state', state);
	const { selectedCategory, postsByCategory } = state
	/*
	const {
		isFetching,
		items: posts
	} = postsByCategory[selectedCategory] || {
		isFetching: true,
		items: []
	}
	*/

	return {
		selectedCategory: state.selectedCategory,
		posts: state.posts.items, 
		isFetching: state.posts.isFetching
	}
}

export default connect(mapStateToProps)(PostList)
