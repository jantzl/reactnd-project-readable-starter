import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CategoryFilter extends Component {
	//FIXME - need to include an onchange to change the filter
	render() {
		const { categories } = this.props
		return (
			<div className='category-filter'>
				Filter by Category: 
					<select> 
					{categories.map((cat) => {
						return (
							<option value={cat.path} key={cat.name}>{cat.name}</option>
					)}) }
					</select>
			</div>
		)
	}
}

CategoryFilter.propTypes = {
	categories: PropTypes.array.isRequired
}
