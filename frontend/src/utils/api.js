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
// FIXME - test
export const fetchPostsByCategory  = (category) => 
  fetch(`${api}/${category}/posts`, { headers })
    .then((res) => res.json())
		.then(data => data.posts)

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
			}
			post.timestamp = Date.now()

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

export const deletePost = (id, cb) => 
  fetch(`${api}/posts/${id}`, { headers, method: 'DELETE' })
    .then((res) => {
			if (!res.ok) {
				throw res.statusText
			}
			res.json()

		})
		.then(() => cb())

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

// FIXME needs test - inputs? outputs?
export const addComment  = () => 
	fetch(`${api}/comments`, 
			{headers, method: 'POST', body: ''})
    .then((res) => res.json())
		.then(data => console.log('what to do with this', data))

// looks good GET
export const fetchCommentById  = (id) => 
  fetch(`${api}/comments/${id}`, { headers })
    .then((res) => res.json())
		.then(data => data.comments)

// FIXME needs test - inputs? outputs?
export const voteOnComment  = (id) => 
	fetch(`${api}/comments`, 
			{headers, method: 'POST', body: ''})
    .then((res) => res.json())
		.then(data => console.log('what to do with this', data))

// FIXME needs test - inputs? outputs?
export const updateComment  = (id) => 
	fetch(`${api}/comments`, 
			{headers, method: 'PUT', body: ''})
    .then((res) => res.json())
		.then(data => console.log('what to do with this', data))

// FIXME needs test
export const deleteComment  = (id) => 
  fetch(`${api}/comments/${id}`, { headers, method: 'DELETE' })
    .then((res) => res.json())
		.then(data => data.posts)

