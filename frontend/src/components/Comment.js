import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { voteComment, deleteComment, showModal } from '../actions/'
import * as globalConsts from '../utils/GlobalConsts'

class Comment extends Component {
	static propTypes = {
		comment: PropTypes.object.isRequired,
  }

	render () {
		const { comment, vote, openModal, remove } = this.props

		return (
			<div> 
				<div className="comment-info">
					{comment.author} says: {comment.body}
					<div className="comment-score">
						{comment.voteScore}
			      <Button onClick={() => vote(comment.id, 'upVote')} bsSize="xsmall"><Glyphicon glyph="arrow-up"/></Button>
						<Button onClick={() => vote(comment.id, 'downVote')} bsSize="xsmall"><Glyphicon glyph="arrow-down"/></Button>
					</div>
				</div>
				<div>
					<Button bsSize="xsmall" data-id={comment.id} onClick={() => openModal(comment)}> 
						Edit <Glyphicon glyph="edit"/>
					</Button>
					<Button bsSize="xsmall" data-id={comment.id} onClick={() => remove(comment.id, comment.parentId)}>
						Delete <Glyphicon glyph="remove-circle"/>
					</Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		openModal: (comment) => dispatch(showModal(comment, globalConsts.COMMENT_MODAL)),
    vote: (id,vote) => dispatch(voteComment(id,vote)),
    remove: (id, parentId) => dispatch(deleteComment(id, parentId)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)

