import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import CategorySelector from './CategorySelector'
import { hideModal } from '../actions/'


class PostModal extends Component {
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
            <h2>Add a Post</h2>
            <form>
              <div>
              <input
                className='post-title'
                type='text'
                placeholder='your title here'
              />
              </div>
              <div>
              <input
                className='post-author'
                type='text'
                placeholder='your name here'
              />
              </div>
              <div>
              <textarea
                className='post-text'
                placeholder='your post here'
              />
              </div>
              <CategorySelector />
              <button>FIXME Post</button>
              <button onClick={closePostModal}>Cancel</button>
            </form>
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
    closePostModal: () => dispatch(hideModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
