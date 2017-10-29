import React from 'react'
import { Field, reduxForm } from 'redux-form'


let CommentForm = props => {
	const closePostModal = props.closePostModal
	const handleSubmit = props.handleSubmit

	return (
		<form>
			<div>
				<Field name="author" component="input" type="text" placeholder="your name here" />
			</div>
			<div>
				<Field name="body" component="input" type="textarea" placeholder="your post here" />
			</div>
			<button onClick={handleSubmit}>Post</button>
			<button onClick={closePostModal}>Cancel</button>
		</form>
	)
}

CommentForm = reduxForm({
	form: 'comment'
})(CommentForm)

export default CommentForm;
