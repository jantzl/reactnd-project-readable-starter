import * as api from '../utils/api'
import * as types from '../utils/ActionTypes'

export const receiveError = error => {
	return {
		type: types.RECEIVE_ERROR, 
		error
	}
}

export const resetError = () => {
	return {
		type: types.RESET_ERROR, 
	}
}

export const addPost = post => {
	return {
		type: types.ADD_POST,
		post: post
	}
}

export const createPost = post => dispatch => {
	api.createPost(post)
	.then((res) => {
		dispatch(addPost(res))
		dispatch(hideModal())
	})
	.catch( error => dispatch(receiveError(error)))
}

export const receivePosts = posts => {
	return {
		type: types.RECEIVE_POSTS,
		posts: posts
	}
}

export const getPosts = () => dispatch => {
	api.fetchAllPosts( posts => {
		dispatch(receivePosts(posts))
	})
	.catch( error => dispatch(receiveError(error)))
}

export const getPost = (id) => dispatch => {
	api.fetchPostById(id)
	.then( post => dispatch(receivePost(post)))
	.then( dispatch(getComments(id)))
	.catch( error => dispatch(receiveError(error)))
}	

export const receivePost = post => ({
	type: types.RECEIVE_POST,
	post: post
})	

export const receivePostUpdate = post => {
	return {
		type: types.RECEIVE_POST_UPDATE, post
	}
}	

export const votePost = (id, vote) => dispatch => {
	api.voteOnPost(id, vote, (post) => {dispatch(receivePostUpdate(post))})
}	

export const deletePost = (id) => dispatch => {
	api.deletePost(id, posts => {
		dispatch(getPosts())
	})
	.catch( error => dispatch(receiveError(error)))
}	

export const receiveCategories = categories => {
	return {
		type: types.RECEIVE_CATEGORIES,
		categories: categories
	}
}

export const getCategories = () => dispatch => {
	api.fetchCategories().then(( categories => {
		dispatch(receiveCategories(categories))
	}))
	.catch( error => dispatch(receiveError(error)))
}

export const receiveComments = (id, comments) => {
	return {
		type: types.RECEIVE_COMMENTS,
		id: id,
		comments: comments,
	}
}

export const getComments = (id) => dispatch => {
	api.fetchCommentsByPost(id)
	.then( comments => { dispatch(receiveComments(id,comments)) })
	.catch( error => dispatch(receiveError(error)))
}	

export function addComment ({postId, commentText}) {
	//FIXME need generate id? 
	return {
		type: types.ADD_COMMENT,
		payload: {
			postId,
			commentText
		}
	}
}	

export const showModal = (id=null) => {
	return {
		type: types.SHOW_MODAL, 
		id: id
	}
}

export function hideModal () {
	return {
		type: types.HIDE_MODAL
	}
}	
