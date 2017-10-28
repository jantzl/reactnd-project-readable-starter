import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Glyphicon, ProgressBar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { showModal } from '../actions/'
import PostEntry from './PostEntry'
import PostModal from './PostModal'

const up = 'chevron-up'
const down = 'chevron-down'
const neutral = 'minus'

class PostList extends Component {
	state = {
		score_icon: neutral,
		date_icon: up,
	}

	static propTypes = {
		selectedCategory: PropTypes.string.isRequired,
		posts: PropTypes.array.isRequired,
	}

	sortDate = () => {
		this.setState({
			date_icon: this.state.date_icon == neutral ?  down : 
								(this.state.date_icon == down ? up : neutral),
		})
		this.setState({ score_icon: neutral })
	}

	sortScore = () => {
		this.setState({
			score_icon: this.state.score_icon == neutral ?  down : 
									(this.state.score_icon == down ? up : neutral),
		})
		this.setState({ date_icon: neutral })
	}

	render () { 
		const { selectedCategory, posts, openModal } = this.props
		const isEmpty = posts.length === 0
		const filter = this.props.match.params.category

		// if no posts, show loading state
		if (isEmpty) {
			return (
				<ProgressBar active now={100} />
			);
		} 

		return (
			<div className='post-list-container'>
				<div className='post-fixme'>
          <Button bsSize="small" onClick={this.sortDate} >Sort Date <Glyphicon glyph={this.state.date_icon} /></Button>
          <Button bsSize="small" onClick={this.sortScore} >Sort Score <Glyphicon glyph={this.state.score_icon} /></Button>
          <Button bsSize="small" onClick={openModal}>
            Create Post <Glyphicon glyph="plus-sign"/>
          </Button>
				</div>
				<Table bordered hover responsive>
					<thead>
						<tr>
							<th>Title</th>
							<th>Author</th>
							<th>Number of Comments</th>
							<th>Number of Votes</th>
							<th>Up/Down Vote</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{ posts.filter((post => {
								if (filter)  {
									return post.category == filter
								} 
								return true
							}))
							.sort((a,b) => {
								//console.log( ' a is ',a)
								//console.log( ' b is ',b)
								if (this.state.date_icon == down) {
									return b.timestamp - a.timestamp
								}
								if (this.state.date_icon == up) {
									return a.timestamp - b.timestamp
								}
								if (this.state.score_icon == down) {
									return b.voteScore - a.voteScore
								}
								if (this.state.score_icon == up) {
									return a.voteScore - b.voteScore
								}
							})
							.map((post, index) => {
							return (
								<PostEntry key={post.id} post={post} />
							);
						})}
					</tbody>
				</Table>
				<PostModal />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		selectedCategory: state.categories.selectedCategory,
		posts: Object.values(state.posts.itemsById), 
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		openModal: () => dispatch(showModal()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
