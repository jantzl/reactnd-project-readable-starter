import * as api from '../utils/api'
import * as types from '../utils/ActionTypes'

export const requestPost = post => ({
	type: types.REQUEST_POST,
	post: post
})	

export const receivePosts = posts => {
	return {
		type: types.RECEIVE_POSTS,
		posts: posts
	}
}

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

// FIXME remove?
/*
export const isLoading = bool => {
	return {
		type: types.IS_LOADING,
		isLoading: bool
	}
}
*/

export const getPosts = () => dispatch => {
	//dispatch(isLoading(true))
	api.fetchAllPosts( posts => {
		dispatch(receivePosts(posts))
	})
	.catch( error => dispatch(receiveError(error)))
}

/*
export function addPost ({post}) {
	return {
		type: types.ADD_POST, 
		new_post: post
	}
}	
*/

export const receivePostUpdate = post => {
	return {
		type: types.RECEIVE_POST_UPDATE, post
	}
}	

export const updatePost = (post) => dispatch => {
	return {
		type: types.UPDATE_POST, post
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
	//dispatch(isLoading(true))
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
