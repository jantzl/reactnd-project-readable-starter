import {combineReducers } from 'redux'

import * as types from '../utils/ActionTypes'

const selectedCategory = (state = '', action) => {
	switch (action.type) {
		case types.SELECT_CATEGORY: 
			return state
		default:
			return state
	}	
}

const initialState = {
	isLoading: false, 
	didInvalidate: false, 
	items: []
}

const posts = (state = initialState, action)  => {
	switch (action.type) {
		case types.ADD_POST: 
			if (action.post) {
				return Object.assign({}, state, {
					posts: [
						Object.assign({}, action.comment, {
							//FIXME complete this
						}),
						...state.posts,
					],
				})
			}
			return state;
		case types.RECEIVE_POSTS: 
			return {
				...state,
				items: action.posts
			}
		//FIXME need to add vote function
		case types.UPDATE_POST: 
			//const { post } = action
			//FIXME 
			return state
		case types.DELETE_POST: 
			//const { post } = action
			//FIXME 
			return state;
		default: 
			return state
	}
}

function comments (state = {}, action) {
	switch (action.type) {
		case types.GET_COMMENTS: 
			//FIXME 
			return state;
		default: 
			return state
	}
}

const rootReducer = combineReducers({
	posts, 
	comments, 
	selectedCategory
})

export default rootReducer
