import React from 'react'
import CategorySelector from './CategorySelector'
import { Field, reduxForm } from 'redux-form'


let PostForm = props => {
	const closePostModal = props.closePostModal
	const postModalOpen = props.postModalOpen
	const handleSubmit = props.handleSubmit

	return (
		<form>
			<div>
				<Field name="title" component="input" type="text" placeholder="your title here" />
			</div>
			<div>
				<Field name="author" component="input" type="text" placeholder="your name here" />
			</div>
			<div>
				<Field name="body" component="input" type="textarea" placeholder="your post here" />
			</div>
			<CategorySelector />
			<button onClick={handleSubmit}>Post</button>
			<button onClick={closePostModal}>Cancel</button>
		</form>
	)
}

PostForm = reduxForm({
	form: 'post'
})(PostForm)

export default PostForm;
