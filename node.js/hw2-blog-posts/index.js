let blogPosts = [
    {
        name: "Blog Post 1",
        desc: "First Post",
        priority: 3
    }, {
        name: "Blog Post 2",
        desc: "Second Post",
        priority: 2
    }, {
        name: "Blog Post 3",
        desc: "Third Post",
        priority: 1
    }, {
        name: "Blog Post 4",
        desc: "Fourth Post",
        priority: 4
    }
]

function listPosts() {
    // await ordersPosts();
    let listPromise = new Promise((resolve, reject) => {
        console.log("Posts are listing...")
        ordersPosts();
        if (blogPosts.length) {
            blogPosts.forEach((post) => {
                console.log(`Name: ${
                    post.name
                } Description: ${
                    post.desc
                } Priority: ${
                    post.priority
                }`)
            })
            resolve("Posts are listed")
        } else {
            reject("There is a listing error")
        }
    })
    return listPromise;
}

function ordersPosts() {
    console.log("Posts are ordering...")
    if (blogPosts.length) {
        blogPosts.sort((a, b) => {
            return b.priority - a.priority;
        })
        console.log("Posts are ordered")
    } else {
        console.log("There is an ordering error")
    }
}

async function addPosts(newPost) {
    let addPromise = new Promise((resolve, reject) => {
        console.log("Post is adding...")
        if (newPost) {
            blogPosts.push(newPost)
            resolve("Post is added")
        } else {
            reject("There is an adding error")
        }
    })
    return addPromise;

}

addPosts({name: "Blog Post 5", desc: "Fifth Post", priority: 5})
    .then((resolve) => {
        console.log(resolve)
        return listPosts(blogPosts);
    }).then((resolve) => {
        console.log(resolve)
    }).catch(reject => {
        console.log(reject)
    })
