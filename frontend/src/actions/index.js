import * as api from '../utils/api'
import * as types from '../utils/ActionTypes'

export const requestPost = post => ({
	type: types.REQUEST_POST,
	post: post
})	

export const receivePosts = posts => ({
	type: types.RECEIVE_POSTS,
	posts: posts
})	

export const getPosts = () => dispatch => {
	api.fetchAllPosts( posts => {
		console.log('in get all posts')
		dispatch(receivePosts(posts))
	})
}	

export function addPost ({text}) {
	return {
		type: types.ADD_POST, text
	}
}	

export function updatePost ({text}) {
	return {
		type: types.UPDATE_POST, text
	}
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
