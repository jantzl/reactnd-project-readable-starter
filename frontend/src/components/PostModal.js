import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { createPost, hideModal } from '../actions/'
import * as globalConsts from '../utils/GlobalConsts'

import PostForm from './PostForm'


class PostModal extends Component {
	submit = (values) => {
		const { createPost } = this.props
		createPost(values)
	}

	render() {
		const { postModalOpen, modalType, closePostModal, selectedPost } = this.props
		const showModal = postModalOpen && modalType === globalConsts.POST_MODAL

		return (
				<Modal
          isOpen={showModal}
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
    modalType: state.modal.modalType,
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
