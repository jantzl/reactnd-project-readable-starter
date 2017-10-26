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

export const fetchFailed = error => {
	return {
		type: types.FETCH_FAILED, 
		error
	}
}

export const isLoading = bool => {
	return {
		type: types.IS_LOADING,
		isLoading: bool
	}
}

export const getPosts = () => dispatch => {
	//dispatch(isLoading(true))
	api.fetchAllPosts( posts => {
		dispatch(receivePosts(posts))
	})
	.catch( error => dispatch(fetchFailed(error)))
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
	.catch( error => dispatch(fetchFailed(error)))
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
	.catch( error => dispatch(fetchFailed(error)))
}

export function getComments ({text}) {
	return {
		type: types.GET_COMMENTS, text
	}
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

export const showModal = (postId=null) => {
	return {
		type: types.SHOW_MODAL
	}
}

export function hideModal () {
	return {
		type: types.HIDE_MODAL
	}
}	
