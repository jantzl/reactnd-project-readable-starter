import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//FIXME - make this work with redux-form - read dox
class CategorySelector extends Component {
	render() {
		const categories = this.props.categories
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

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    postCategory: state.posts.selectedPost.category,
  }
}

export default connect(mapStateToProps)(CategorySelector)
