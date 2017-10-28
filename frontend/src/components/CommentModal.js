import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { createComment, hideModal } from '../actions/'
import * as globalConsts from '../utils/GlobalConsts'
import CommentForm from './CommentForm'

class CommentModal extends Component {
	submit = (values) => {
		const { createComment } = this.props
		createComment(values)
	}

	render() {
		const { modalOpen, modalType, closeModal, selectedComment } = this.props
		const showModal = modalOpen && modalType === globalConsts.COMMENT_MODAL

		return (
				<Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          contentLabel='Comment Modal'
        >
          <div>
            <h3>Add a Comment</h3>
						<CommentForm initialValues={selectedComment} onSubmit={this.submit} />
          </div>
        </Modal>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    modalOpen: state.modal.showModal,
    modalType: state.modal.modalType,
    selectedComment: state.posts.selectedComment,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    closeModal: () => dispatch(hideModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentModal)
