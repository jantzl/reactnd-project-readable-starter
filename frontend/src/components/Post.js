import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProgressBar } from 'react-bootstrap'
import { getPost } from '../actions/'
import Comments from './Comments'


class Post extends Component {
	componentDidMount() {
    const post_id = this.props.match.params.post_id
		const { fetchData } = this.props
    fetchData(post_id)
	}

  render() {
		const { posts } = this.props
		const isEmpty = posts.length === 0

		if (isEmpty) {
			return (
				<ProgressBar active now={100} />
			);
		}

		const post = posts[0]
    return (
      <div>
				<h4><b>{post.title}</b> [{post.category}]</h4>
				<div>{post.body}</div>
				<br/>
				<Comments comments={post.comments} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
		posts: Object.values(state.posts.itemsById)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		fetchData: (id) => dispatch(getPost(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)

