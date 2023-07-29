const postList = document.getElementById("post-list");
const postsBtn = document.getElementById("posts-btn");
const albumsBtn = document.getElementById("albums-btn");
const photosBtn = document.getElementById("photos-btn");

let activeBtn = postsBtn; // default active button is Posts

function highlightActiveBtn(btn) {
    activeBtn.classList.remove("active");
    btn.classList.add("active");
    activeBtn = btn;
}

function displayPostTitles(posts) {
    postList.innerHTML = "";
    posts.forEach(function (post) {
        const li = document.createElement("li");
        li.textContent = post.title;
        postList.appendChild(li);
    });
}

function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => displayPostTitles(posts))
        .catch(error => console.error(error));
}

function fetchAlbums() {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(albums => displayPostTitles(albums))
        .catch(error => console.error(error));
}

function fetchPhotos() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
        .then(photos => displayPostTitles(photos))
        .catch(error => console.error(error));
}

postsBtn.addEventListener("click", function () {
    fetchPosts();
    highlightActiveBtn(postsBtn);
});

albumsBtn.addEventListener("click", function () {
    fetchAlbums();
    highlightActiveBtn(albumsBtn);
});

photosBtn.addEventListener("click", function () {
    fetchPhotos();
    highlightActiveBtn(photosBtn);
});
fetchPosts(); // display posts by default