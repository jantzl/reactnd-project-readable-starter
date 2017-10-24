import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CategoryFilter extends Component {
	//FIXME - need to include an onclick to change the filter
	render() {
		const { categories } = this.props
		return (
			<div className='category-filter'>
				Filter by Category: 
					{categories.map((cat) => {
						return (
							<button value={cat.path} key={cat.name}>{cat.name}</button>
					)}) }
			</div>
		)
	}
}

CategoryFilter.propTypes = {
	categories: PropTypes.array.isRequired
}
