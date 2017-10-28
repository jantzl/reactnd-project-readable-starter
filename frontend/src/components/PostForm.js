import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'


let PostForm = props => {
	const closePostModal = props.closePostModal
	const postModalOpen = props.postModalOpen
	const handleSubmit = props.handleSubmit
	const categories = props.categories

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
			<div className='category-selector'>
		    <Field name="category" component="select">
					<option></option>
          {categories.map((cat) => {
            return (
              <option value={cat.path} key={cat.name}>{cat.name}</option>
          )}) }
        </Field>
			</div>
			<button onClick={handleSubmit}>Post</button>
			<button onClick={closePostModal}>Cancel</button>
		</form>
	)
}

const mapStateToProps = (state) => {
	return{
    categories: state.categories.categories,
	}
}

PostForm = reduxForm({
	form: 'post'
})(PostForm)

export default connect(mapStateToProps)(PostForm);
