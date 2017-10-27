import React from 'react'
import {render} from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { Provider } from 'react-redux'
import  App from './components/App'
import './index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	reducer, 
	composeEnhancers(
		applyMiddleware(thunk, createLogger())
	)
)

render(
		<Provider store={store}>
			<App />
		</Provider>, document.getElementById('root'))
registerServiceWorker()
