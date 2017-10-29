import React, { Component } from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createComment, hideModal } from '../actions/'
import * as globalConsts from '../utils/GlobalConsts'
import CommentForm from './CommentForm'

class CommentModal extends Component {
  static propTypes = {
    post_id: PropTypes.string,
  }

	submit = (values) => {
		const { createComment, post_id } = this.props
		values.parentId=post_id
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
    selectedComment: state.modal.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    closeModal: () => dispatch(hideModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentModal)
