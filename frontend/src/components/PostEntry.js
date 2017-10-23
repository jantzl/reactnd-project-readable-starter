import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Glyphicon } from 'react-bootstrap'

class PostEntry extends Component {

	static propTypes = {
		post: PropTypes.object.isRequired,
  }

	render () {
		const post = this.props.post
		return (
			<tr> 
				<td>{post.title}</td>
				<td>{post.body}</td>
				<td>{post.author}</td>
				<td>{post.category}</td>
				<td>{post.votescore}</td>
				<td>{post.timestamp}</td>
				<td>
					<Button bsSize="xsmall" data-id={post.id}>View<Glyphicon glyph="view"/></Button>
					<Button bsSize="xsmall" data-id={post.id}>Edit<Glyphicon glyph="edit"/></Button>
					<Button bsSize="xsmall" data-id={post.id}>Delete<Glyphicon glyph="delete"/></Button>
				</td>
			</tr>
		);
	}
}

export default PostEntry;

