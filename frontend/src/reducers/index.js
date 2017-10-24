import {combineReducers } from 'redux'
import * as types from '../utils/ActionTypes'

const modal = (state = {modalType: null, showModal: false}, action) => {
	switch (action.type) {
		case types.SHOW_MODAL: 
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
						Object.assign({}, action.post, {
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
				/*
				itemsById: action.posts.reduce((obj, post) => {
					obj[post.id] = post
					return obj
				}, {}),
				*/
				items: action.posts,
			}
		case types.RECEIVE_POST_UPDATE: 
			return {
				...state,
				/*
				itemsById: {
					...state['itemsById'],
					[action.post.id]: action.post
				}, 
				*/
				items: state.items.map(item => item.id === action.post.id ? 
					{...item, voteScore: action.post.voteScore} : item
				)
			}
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

const catInitialState = {
	selectedCategory: '', 
	categories: []
}

const categories = (state = catInitialState, action)  => {
	switch (action.type) {
		case types.SELECT_CATEGORY: 
			return {
				...state,
				selectedCategory: action.selected
			}
		case types.RECEIVE_CATEGORIES: 
			return {
				...state,
				categories: action.categories
			}
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
	categories,
	modal,
})

export default rootReducer
