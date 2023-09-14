const wordpressUrl = "https://bjotech.no/blog/wp-json/wp/v2/posts/";
const id = new URLSearchParams(window.location.search).get("id");
const postUrl = wordpressUrl + id + "?_embed";
const container = document.querySelector(".blog-container");

async function getPost() {
  try {
    const response = await fetch(postUrl);
    const post = await response.json();
    console.log(post);
    document.title = "Bjotech | " + post.title.rendered;
    container.innerHTML += `<div class="blog-content">
        <h1>${post.title.rendered}</h1>
        <div class="blog-image">
        <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
        </div>
        <div class="content">
        ${post.content.rendered}
        </div>

        </div>`;
    document.querySelector("h1").innerHTML = post.title.rendered;
  } catch (error) {
    console.log(error);
  }
}

getPost();
