import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { createPost, hideModal } from '../actions/'

import PostForm from './PostForm'


class PostModal extends Component {
	submit = (values) => {
		const {createPost, closePostModal} = this.props
		createPost(values)
	}

	render() {
		const closePostModal = this.props.closePostModal
		const postModalOpen = this.props.postModalOpen
		const selectedPost = this.props.selectedPost

		return (
				<Modal
          isOpen={postModalOpen}
          onRequestClose={closePostModal}
          contentLabel='Post Modal'
        >
          <div>
            <h3>Add a Post</h3>
						<PostForm initialValues={selectedPost} onSubmit={this.submit} />
          </div>
        </Modal>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    postModalOpen: state.modal.showModal,
    selectedPost: state.posts.selectedPost,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    closePostModal: () => dispatch(hideModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
