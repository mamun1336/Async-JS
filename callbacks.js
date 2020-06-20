const posts = [
    {title: 'Post One', body: 'This is post One'},
    {title: 'Post Two', bosy: 'This is post Two'}
];
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


createPost({title: 'Post Three', body: 'This is post Three'},getPosts);
getPosts();