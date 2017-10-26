import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { getPosts,hideModal } from '../actions/'

import * as api from '../utils/api'
import PostForm from './PostForm'


class PostModal extends Component {
	submit = (values) => {
		const {closePostModal, fetchData} = this.props
		api.createPost(values, post => {
			fetchData()
			closePostModal()
		})
		//FIXME
		/*
		.catch(
			error => console.log('error', error)
			//error => dispatch(receiveError(error))
		)
		*/
		//FIXME - cancel button doesn't cancel post
	}

	render() {
		const closePostModal = this.props.closePostModal
		const postModalOpen = this.props.postModalOpen

		return (
				<Modal
          isOpen={postModalOpen}
          onRequestClose={closePostModal}
          contentLabel='Post Modal'
        >
          <div>
            <h3>Add a Post</h3>
						<PostForm onSubmit={this.submit} />
          </div>
        </Modal>
		)
	}
}

const mapStateToProps = (state) => {
	console.log('change state', state)
  return {
    postModalOpen: state.modal.showModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		fetchData: () => dispatch(getPosts()),
    closePostModal: () => dispatch(hideModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
