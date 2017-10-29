import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Glyphicon, ProgressBar } from 'react-bootstrap'
import { showModal, getComments } from '../actions/'
import Comment from './Comment'
import CommentModal from './CommentModal'
import * as globalConsts from '../utils/GlobalConsts'

class Comments extends Component {
	static propTypes = {
		post_id: PropTypes.string,
	}

  componentDidMount() {
    const { post_id, fetchData } = this.props

    fetchData(post_id)
  }

	render () { 
    const { post_id, openModal, comments } = this.props
    const isEmpty = comments.length === 0

		// if no posts, show loading state
		if (isEmpty) {
			return (
        <ProgressBar active now={100} />
			)
		}

		return (
			<div className='comment-container'>
				<div><b>Comments Section</b></div>
				<div>
					<Button bsSize="xsmall" onClick={() => openModal()}>
						Add Comment <Glyphicon glyph="microphone"/>
					</Button>
				</div>
				<div>number of comments: {comments.length}</div>
				<div className="comment-container">
					{ comments.map((comment, index) => {
						return (
							<Comment key={comment.id} comment={comment} />
						);
					})}
				</div>
				<CommentModal post_id={post_id}/>
			</div>
		)
		
	}
}

const mapStateToProps = (state,ownProps) => {
	return {
    comments: state.posts.itemsById[ownProps.post_id].comments === undefined  ?
							[] :
							Object.values(state.posts.itemsById[ownProps.post_id].comments),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		openModal: () => dispatch(showModal(null, globalConsts.COMMENT_MODAL)),
    fetchData: (id) => dispatch(getComments(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
