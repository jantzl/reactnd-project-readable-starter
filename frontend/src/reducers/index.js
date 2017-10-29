import {combineReducers } from 'redux'
import * as types from '../utils/ActionTypes'
import { reducer as formReducer } from 'redux-form'

const modal = (state = {modalType: null, showModal: false, data: null}, action) => {
	switch (action.type) {
		case types.SHOW_MODAL: 
			return {
				modalType: action.modalType,
				showModal: true,
				data: action.data,
			}
		case types.HIDE_MODAL: 
			return {
				modalType: action.modalType,
				showModal: false,
				data: action.data,
			}
		default:
			return state
	}	
}

const initialState = {
	didInvalidate: false, 
	itemsById: {},
}

const posts = (state = initialState, action)  => {
	switch (action.type) {
		case types.ADD_POST: 
		//case types.RECEIVE_POST: 
			return {
				...state,
				itemsById: {
					...state['itemsById'],
					[action.post.id]: action.post,
				}
			}
		case types.ADD_COMMENT:
			return {
				...state,
				itemsById: {
					...state['itemsById'],
					[action.comment.parentId]: {
						...state['itemsById'][action.comment.parentId],
						comments: {
							...state['itemsById'][action.comment.parentId]['comments'],
							[action.comment.id]: action.comment,
						},
						numberOfComments: state['itemsById'][action.comment.parentId]['numberOfComments']++,
					}
				}
			}
			return state
		case types.HIDE_MODAL: 
			return {
				...state,
				selectedPost: {}
			}
		case types.RECEIVE_POSTS: 
			return {
				...state,
				itemsById: action.posts.reduce((obj, post) => {
					obj[post.id] = post
					return obj
				}, {}),
			}
		case types.RECEIVE_COMMENTS: 
			return {
				...state,
				itemsById: {
					...state['itemsById'],
					[action.id]: {
						...state['itemsById'][action.id],
						numberOfComments: action.comments.length,
						comments: action.comments.reduce((obj, comment) => {
							obj[comment.id] = comment
							return obj
						}, {}),
					}
				}, 
			}
		case types.RECEIVE_POST_UPDATE: 
			return {
				...state,
				itemsById: {
					...state['itemsById'],
					[action.post.id]: {
						...state['itemsById'][action.post.id],
						voteScore: action.post.voteScore
					}
				}, 
			}
		default: 
			return state
	}
}

//FIXME - clean up 
const catInitialState = {
	categories: [],
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

const errorMessage = (state = null, action) => {
	switch (action.type) {
		case types.RECEIVE_ERROR: 
			return action.error
		case types.RESET_ERROR: 
			return null;
		default: 
			return state
	}
}

const rootReducer = combineReducers({
	posts, 
	categories,
	errorMessage,
	modal,
	form: formReducer,
})

export default rootReducer
