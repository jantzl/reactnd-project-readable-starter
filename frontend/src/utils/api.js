const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token, 
	'Content-Type': 'application/json',
}

// ------ category functions ---------
export const fetchCategories  = () => 
  fetch(`${api}/categories`, { headers })
    .then((res) => res.json())
		.then(data => data.categories)

// ------ post functions ---------
export const fetchAllPosts  = (cb) => 
  fetch(`${api}/posts`, { headers })
    .then((res) => res.json())
		.then(data =>  cb(data))

export const createPost  = (post) => {
	return new Promise(
		function (resolve, reject) {
			if (post.id === undefined) {
				post.id = Math.random().toString(36).substring(2) 
									 + (new Date()).getTime().toString(36)
				post.timestamp = Date.now()
			}

			fetch(`${api}/posts`, 
					{headers, method: 'POST', 
						body:  JSON.stringify(post)})
				.then((res) => res.json())
				.then(data => resolve(data))
		}
	)
}

export const fetchPostById  = (id) => {
	return new Promise (
		function (resolve, reject) {
			fetch(`${api}/posts/${id}`, { headers })
				.then((res) => res.json())
				.then(data => resolve(data))
		}
	)
}

export const voteOnPost  = (id,vote,cb) => {
  fetch(`${api}/posts/${id}`, 
			{ headers, method: 'POST', 
				body:  JSON.stringify({option:vote})})
    .then((res) => res.json())
		.then(data => cb(data))
}

export const deletePost = (id) => {
	return new Promise(
		function(resolve,reject) {
			fetch(`${api}/posts/${id}`, { headers, method: 'DELETE' })
				.then((res) => {
					if (!res.ok) {
						throw res.statusText
					}
					res.json()

				})
				.then(() => resolve())
		}
	)
}

// ------ comment functions ---------
export const fetchCommentsByPost  = (post_id) => {
	return new Promise(
		function (resolve, reject) {
			fetch(`${api}/posts/${post_id}/comments`, { headers })
			.then((res) => res.json())
			.then(data => resolve(data))
		}
	)
}

export const createComment  = (comment) => {
	return new Promise(
		function (resolve, reject) {
      if (comment.id === undefined) {
        comment.id = Math.random().toString(36).substring(2)
                   + (new Date()).getTime().toString(36)
        comment.timestamp = Date.now()
      }
			fetch(`${api}/comments`, 
					{headers, method: 'POST', 
					body:  JSON.stringify(comment)})
				.then((res) => res.json())
				.then(data => resolve(data))
		}
	)
}

export const fetchCommentById  = (id) => 
  fetch(`${api}/comments/${id}`, { headers })
    .then((res) => res.json())
		.then(data => data.comments)

export const voteOnComment  = (id, vote, cb) => 
	fetch(`${api}/comments/${id}`, 
			{ headers, method: 'POST', 
				body:  JSON.stringify({option:vote})})
    .then((res) => res.json())
		.then(data => cb(data))

export const deleteComment = (id) => {
	return new Promise(
		function(resolve,reject) {
			fetch(`${api}/comments/${id}`, { headers, method: 'DELETE' })
				.then((res) => {
					if (!res.ok) {
						throw res.statusText
					}
					res.json()

				})
				.then(() => resolve())
		}
	)
}

