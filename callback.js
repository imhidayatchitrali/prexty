const posts = [
    { title: "Post One", body: "This is Body One" },
    { title: "Post two", body: "This is Body Two" }
]

function getPost() {
    let output = ''
    setTimeout(() => {
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post, callBack) {
    setTimeout(() => {
        posts.push(post)
        callBack()
    }, 2000);
}

getPost()
createPost({ title: "This is post Three", body: "This is body Three" }, getPost)