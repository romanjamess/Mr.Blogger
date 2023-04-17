const commentHandler = async (event) => {
    event.preventDefault();
    const post_id = document.querySelector('input[name="post_id"]').value;
    const comment = document.querySelector('textarea[name="comment-body"]').value.trim();
  // console.log(comment);
    await fetch ('/api/comment', {
      method: 'POST',
      body: JSON.stringify({post_id, comment}),
      headers: { 'Content-Type': 'application/json' },
    })
    document.location.reload();
    // console.log( post_id, body)
  }
  
  document
    .querySelector('.comment-button')
    .addEventListener('click', commentHandler)