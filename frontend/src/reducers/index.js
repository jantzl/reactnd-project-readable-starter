import {combineReducers } from 'redux'

import {
	// post actions
	GET_POSTS,
	ADD_POST,
	UPDATE_POST,
	DELETE_POST,
	// comment actions
	GET_COMMENTS,
} from '../actions'

function posts (state = {}, action) {
	switch (action.type) {
		case GET_POSTS: 
			//FIXME 
			return state;
		case ADD_POST: 
			//const { post } = action
			//FIXME 
			return state;
		//FIXME need to add vote function
		case UPDATE_POST: 
			//const { post } = action
			//FIXME 
			return state;
		case DELETE_POST: 
			//const { post } = action
			//FIXME 
			return state;
		default: 
			return state
	}
}

function comments (state = {}, action) {
	switch (action.type) {
		case GET_COMMENTS: 
			//FIXME 
			return state;
		default: 
			return state
	}
}

export default combineReducers({
	posts, 
	comments,
})
