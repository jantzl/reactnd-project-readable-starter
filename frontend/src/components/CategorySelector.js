import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CategorySelector extends Component {
	render() {
		const categories = []
		return (
			<div className='category-filter'>
				Category: 
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

CategorySelector.propTypes = {
	categories: PropTypes.array.isRequired
}
