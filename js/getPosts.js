const wordpressUrl = "https://bjotech.no/blog/wp-json/wp/v2/posts?_embed";
const article = document.querySelector(".articles")

async function getPosts() {
    try {
        const response = await fetch(wordpressUrl);
        const posts = await response.json();
        console.log(posts);
        for (let i = 0; i < posts.length; i++) {
            article.innerHTML += `<div class="card">
            <h4>${posts[i].title.rendered}</h3>
            <img src="${posts[i]._embedded["wp:featuredmedia"][0].source_url}" alt="${posts[i]._embedded["wp:featuredmedia"][0].alt_text}">
            <p>${posts[i].excerpt.rendered}</p>
            <button class="btn">
            <a href="post.html?id=${posts[i].id}">Read more</a>
            </button>
            </div>`;
        }
    } catch (error) {
        console.log(error);
    }
}

getPosts();
