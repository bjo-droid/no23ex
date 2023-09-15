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
        <img id="blogImage" src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
        <div id="img-modal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="pop-out">
        <div id="caption"></div>
        </div>
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

// Get the modal
var modal = document.getElementById("blog-image");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = post._embedded["wp:featuredmedia"][0].source_url;
var modalImg = document.getElementById("pop-out");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
