/* fetch('https://jsonplaceholder.typicode.com/todos/1') //this url is API
    .then(response => console.log(response)) //response take json e convert kortese. .json is not similar but close to JSON.parse
// .then(json => console.log(json)) */

/* fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json)) */

/* fetch(url)
.then(response => response.json())
.then(json => console.log(json)) */

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}