import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { Provider } from 'react-redux'
import  App from './components/App'
import  Post from './components/Post'
import  NotFound from './components/NotFound'
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
			<Router>
				<Switch>
					<Route exact name="index" path="/" component={App} />
					<Route path="/:category?" component={App} />
					<Route path="/:category/:post_id?" component={App} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</Provider>, document.getElementById('root'))
registerServiceWorker()
