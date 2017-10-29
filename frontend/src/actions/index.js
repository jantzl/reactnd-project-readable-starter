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
		dispatch(getComments(res.id))
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

export const receivePostUpdate = post => {
	return {
		type: types.RECEIVE_POST_UPDATE, post
	}
}	

export const votePost = (id, vote) => dispatch => {
	api.voteOnPost(id, vote, (post) => {dispatch(receivePostUpdate(post))})
}	

export const deletePost = (id) => dispatch => {
	api.deletePost(id)
	.then(posts => {
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

export const addComment = comment => {
	return {
		type: types.ADD_COMMENT,
		comment: comment
	}
}

export const createComment = comment => dispatch => {
	api.createComment(comment)
	.then((res) => {
		dispatch(addComment(res))
		dispatch(hideModal())
	})
	.catch( error => dispatch(receiveError(error)))
}	

export const receiveCommentUpdate = (parentId, comment) => {
	return {
		type: types.RECEIVE_COMMENT_UPDATE, 
		parentId: parentId, 
		comment: comment,
	}
}	

export const voteComment = (id, parentId, vote) => dispatch => {
	api.voteOnComment(id, vote, (comment) => {dispatch(receiveCommentUpdate(parentId, comment))})
}	

export const deleteComment = (id, parentId) => dispatch => {
	api.deleteComment(id)
	.then(comments => {
		dispatch(getComments(parentId))
	})
	.catch( error => dispatch(receiveError(error)))
}	

export const showModal = (data=null, type) => {
	return {
		type: types.SHOW_MODAL, 
		data: data, 
		modalType: type,
	}
}

export function hideModal () {
	return {
		type: types.HIDE_MODAL
	}
}	
