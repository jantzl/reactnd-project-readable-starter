import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Glyphicon, ProgressBar } from 'react-bootstrap'
import { getPost, votePost, deletePost, showModal } from '../actions/'
import Comments from './Comments'


class Post extends Component {
	componentDidMount() {
    const post_id = this.props.match.params.post_id
		const { fetchData } = this.props
    fetchData(post_id)
	}

  render() {
		const { posts,vote,openModal,remove } = this.props
		const isEmpty = posts.length === 0

		if (isEmpty) {
			return (
				<ProgressBar active now={100} />
			);
		}

		const post = posts[0]
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
		posts: Object.values(state.posts.itemsById),
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

