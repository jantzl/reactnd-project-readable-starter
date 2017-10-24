import {combineReducers } from 'redux'

import * as types from '../utils/ActionTypes'

const modal = (state = {modalType: null, showModal: false}, action) => {
	console.log('here');
	switch (action.type) {
		case types.SHOW_MODAL: 
			console.log('in show modal reducer');
			return {
				modalType: action.modalType,
				showModal: true
			}
		case types.HIDE_MODAL: 
			return {
				modalType: action.modalType,
				showModal: false
			}
		default:
			return state
	}	
}

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
		case types.RECEIVE_POST_UPDATE: 
			console.log('gotta update post here');
			//const { post } = action
			//FIXME 
			return state
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
		case types.RECEIVE_COMMENTS: 
			//FIXME 
			return state;
		default: 
			return state
	}
}

const rootReducer = combineReducers({
	posts, 
	comments, 
	selectedCategory,
	modal,
})

export default rootReducer
