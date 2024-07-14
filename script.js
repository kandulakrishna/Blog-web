function addComment(event, postId) {
    event.preventDefault();
    
    const name = document.getElementById(`name-${postId}`).value;
    const message = document.getElementById(`message-${postId}`).value;
    
    if (name && message) {
        const commentSection = document.getElementById(`comments-${postId}`);
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `<strong>${name}</strong><p>${message}</p>`;
        
        commentSection.appendChild(newComment);
        
        document.getElementById(`name-${postId}`).value = '';
        document.getElementById(`message-${postId}`).value = '';
    }
}
