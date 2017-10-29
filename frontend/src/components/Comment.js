import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { voteComment } from '../actions/'


class Comment extends Component {
	static propTypes = {
		comment: PropTypes.object.isRequired,
  }

	render () {
		const comment = this.props.comment
    const vote = this.props.vote

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
					<Button bsSize="xsmall" data-id={comment.id}> 
						Edit <Glyphicon glyph="edit"/>
					</Button>
					<Button bsSize="xsmall" data-id={comment.id}>
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
    vote: (id,vote) => dispatch(voteComment(id,vote)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)

