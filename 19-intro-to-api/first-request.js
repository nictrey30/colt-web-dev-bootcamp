const fetch = require('node-fetch');

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();
  return data;
};

const newPost = post => {
  const options = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
  };
  console.log(post);
  return fetch('https://jsonplaceholder.typicode.com/posts', options);
};

let post = {
  title: 'foo',
  body: 'bar',
  userId: 1
};
getUsers().then(data => console.log(data));
newPost(post)
  .then(data => data.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
