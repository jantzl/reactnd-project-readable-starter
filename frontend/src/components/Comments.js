import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ProgressBar, Button, Glyphicon } from 'react-bootstrap'
import { showModal } from '../actions/'
import Comment from './Comment'

class Comments extends Component {
	static propTypes = {
		comments: PropTypes.array,
	}

	render () { 
		const { comments } = this.props

		// if no posts, show loading state
		if (comments) { 
			return (
				<div className='comment-container'>
					<div><b>Comments Section</b></div>
					<div>number of comments: {comments.length}</div>
					{ comments.map((comment, index) => {
						return (
							<Comment key={comment.id} comment={comment} />
						);
					})}
				</div>
			)
		}
		
		return (
			<div></div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		openModal: () => dispatch(showModal()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
