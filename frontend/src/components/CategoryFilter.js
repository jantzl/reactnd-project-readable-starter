import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FilterLink from './FilterLink'

export default class CategoryFilter extends Component {
	//FIXME - need to include an onclick to change the filter
	render() {
		const { categories } = this.props
		return (
			<div className='category-filter'>
				Filter by Category:  
					<button><FilterLink filter="SHOW_ALL">all</FilterLink></button>
					{categories.map((cat) => {
						return (
							<button key={cat.name}><FilterLink filter={cat.path}>{cat.name}</FilterLink></button>

					)}) }
			</div>
		)
	}
}

CategoryFilter.propTypes = {
	categories: PropTypes.array.isRequired
}
