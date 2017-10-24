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
	dispatch(isLoading(true))
	api.fetchAllPosts( posts => {
		dispatch(receivePosts(posts))
	})
	.catch( error => dispatch(fetchFailed(error)))
}

export function addPost ({text}) {
	return {
		type: types.ADD_POST, text
	}
}	

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

export function deletePost ({text}) {
	return {
		type: types.DELETE_POST, text
	}
}	

export function getComments ({text}) {
	return {
		type: types.GET_COMMENTS, text
	}
}	

export const showModal = () => {
	return {
		type: types.SHOW_MODAL
	}
}

export function hideModal () {
	return {
		type: types.HIDE_MODAL
	}
}	
