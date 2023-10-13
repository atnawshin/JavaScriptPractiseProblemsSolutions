function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
function displayComments(comments) {
    const commentsContainer = document.getElementById('comments-container');
    for (const comment of comments) {
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
        <h3>ID: ${comment.postId}</h3>
        <h4>User Name: ${comment.name}</h4>
        <p>Email: ${comment.email}</p>
        <p>Comment: ${comment.body}</p>
        `;
        commentsContainer.appendChild(commentDiv);
    }
}
loadComments();