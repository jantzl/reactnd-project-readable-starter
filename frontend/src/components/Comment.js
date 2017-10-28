import React, { Component } from 'react'
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
			</div>
		);
	}
}

export default Comment
