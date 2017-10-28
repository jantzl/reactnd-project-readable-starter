import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Glyphicon } from 'react-bootstrap'
import { getPost, votePost, deletePost, showModal } from '../actions/'
import Comments from './Comments'
import NotFound from './NotFound'
import PostModal from './PostModal'

class Post extends Component {

  render() {
		const { post,vote,openModal,remove } = this.props

		if (!post) {
			return (
				<NotFound />
			)
		}

    return (
      <div>
				<h4><b>{post.title}</b> [category:{post.category}]</h4> 
				<div>author: {post.author}</div>
				<div>{post.body}</div>
				<div>
					Score: {post.voteScore}
			    <Button onClick={() => vote(post.id, 'upVote')} bsSize="xsmall" data-id={post.id}>Up Vote <Glyphicon glyph="arrow-up"/></Button>
          <Button onClick={() => vote(post.id, 'downVote')} bsSize="xsmall" data-id={post.id}>Down Vote <Glyphicon glyph="arrow-down"/></Button>
				</div>
				<br/>
				<div>
			    <Button bsSize="xsmall" data-id={post.id} onClick={() => openModal(post.id)}>
            Edit <Glyphicon glyph="edit"/>
          </Button>
          <Button bsSize="xsmall" data-id={post.id} onClick={() => remove(post.id)}>
            Delete <Glyphicon glyph="remove-circle"/>
          </Button>
				</div>
				<br/>
				<Comments comments={post.comments} />
			  <PostModal />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
		post: state.posts.itemsById[ownProps.match.params.post_id],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		fetchData: (id) => dispatch(getPost(id)),
		vote: (id,vote) => dispatch(votePost(id,vote)),
		remove: (id) => dispatch(deletePost(id)),
    openModal: (id) => dispatch(showModal(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)

