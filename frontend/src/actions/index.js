export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_COMMENTS = 'GET_COMMENTS'

export function getPosts ({text}) {
	return {
		type: GET_POSTS, text
	}
}	

export function addPost ({text}) {
	return {
		type: ADD_POST, text
	}
}	

export function updatePost ({text}) {
	return {
		type: UPDATE_POST, text
	}
}	

export function deletePost ({text}) {
	return {
		type: DELETE_POST, text
	}
}	

export function getComments ({text}) {
	return {
		type: GET_COMMENTS, text
	}
}	
