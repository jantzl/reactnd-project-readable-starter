import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getComments, votePost, deletePost, showModal } from '../actions/'
import * as globalConsts from '../utils/GlobalConsts'

class PostEntry extends Component {
	static propTypes = {
		post: PropTypes.object.isRequired,
  }

	componentDidMount() {
		const { post, fetchData } = this.props

    fetchData(post.id)
	}

	render () {
		const post = this.props.post
		const vote = this.props.vote
		const remove = this.props.remove
		const openModal = this.props.openModal
		return (
			<tr> 
				<td><NavLink to={'/'+post.category + '/' + post.id}>{post.title}</NavLink></td>
				<td>{post.author}</td>
				<td>{post.numberOfComments}</td>
				<td>{post.voteScore}</td>
				<td>
					<Button onClick={() => vote(post.id, 'upVote')} bsSize="xsmall" data-id={post.id}>Up Vote <Glyphicon glyph="arrow-up"/></Button>
					<Button onClick={() => vote(post.id, 'downVote')} bsSize="xsmall" data-id={post.id}>Down Vote <Glyphicon glyph="arrow-down"/></Button>
				</td>
				<td>
					<Button bsSize="xsmall" data-id={post.id} onClick={() => openModal(post)}>
						Edit <Glyphicon glyph="edit"/>
					</Button>
					<Button bsSize="xsmall" data-id={post.id} onClick={() => remove(post.id)}>
						Delete <Glyphicon glyph="remove-circle"/>
					</Button>
				</td>
			</tr>
		);
	}
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		openModal: (id) => dispatch(showModal(id, globalConsts.POST_MODAL)),
    vote: (id,vote) => dispatch(votePost(id,vote)),
    remove: (id) => dispatch(deletePost(id)),
	  fetchData: (id) => dispatch(getComments(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEntry)
