const api = "http://localhost:3001";

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
// FIXME - test
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

// FIXME needs test - inputs? outputs?
export const createPost  = () => 
	fetch(`${api}/posts`, 
			{headers, method: 'POST', body: ''})
    .then((res) => res.json())
		.then(data => console.log('what to do with this', data))

// FIXME needs test
export const fetchPostById  = (id) => 
  fetch(`${api}/posts/${id}`, { headers })
    .then((res) => res.json())
		.then(data => data.posts)

export const voteOnPost  = (id,vote,cb) => {
  fetch(`${api}/posts/${id}`, 
			{ headers, method: 'POST', 
				body:  JSON.stringify({option:vote})})
    .then((res) => res.json())
		.then(data => cb(data))
}

// FIXME needs test - inputs? outputs?
export const updatePost  = (id) => 
  fetch(`${api}/posts/${id}`, 
			{ headers, method: 'PUT'})
    .then((res) => res.json())
		.then(data => data.posts)

// FIXME needs test
export const deletePost  = (id) => 
  fetch(`${api}/posts/${id}`, { headers, method: 'DELETE' })
    .then((res) => res.json())
		.then(data => data.posts)

// ------ comment functions ---------
// looks good GET
export const fetchCommentsByPost  = (post_id) => 
  fetch(`${api}/posts/${post_id}/comments`, { headers })
    .then((res) => res.json())
		.then(data => data.comments)

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

