import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { getPosts,hideModal,receiveError } from '../actions/'

import * as api from '../utils/api'
import PostForm from './PostForm'


class PostModal extends Component {
	submit = (values) => {
		const {closePostModal, fetchData, showError} = this.props
		api.createPost(values)
		.then(() => {
		//FIXME - the submitted form loses comment info - probably shouldn't fetch here
			fetchData()
			closePostModal()
		})
		.catch(
			error => showError(error)
		)
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
		fetchData: () => dispatch(getPosts()),
    closePostModal: () => dispatch(hideModal()),
		showError: (error) => dispatch(receiveError(error)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
