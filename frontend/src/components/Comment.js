import React, { Component } from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import PropTypes from 'prop-types'

class Comment extends Component {
	static propTypes = {
		comment: PropTypes.object.isRequired,
  }

	render () {
		const comment = this.props.comment
		return (
			<div> 
			{comment.author} says: {comment.body}
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

export default Comment
