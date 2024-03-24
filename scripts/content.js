function deleteAnonPosts() {
    let anonPosts = Array.from(document.querySelectorAll('span')).filter(el => el.textContent === 'Anonymous participant');

    for (let i = 0; i < anonPosts.length -1; i++) {
        // Horrible fragile way to get the parent card, but it'll do for now
        anonPosts[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    }
}

// Delete on page scroll to workaround the "infinite page" loading
document.addEventListener('scroll', deleteAnonPosts);

// Initial purge of anon posts
deleteAnonPosts();