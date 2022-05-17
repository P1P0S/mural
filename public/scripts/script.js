document.addEventListener("DOMContentLoaded", () => {
  updatePosts();
});

function updatePosts() {
  fetch("/api/all")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let postElements = "";

      let posts = JSON.parse(json);
      posts.forEach((post) => {
        let postElement = `
      <div id="${post.id}" class="card mb-3">
        <div class="card-header">
          <h5 class="card-title">${post.title}</h5>
        </div>

        <div class="card-body">
          <div class="card-text">
             ${post.description}
          </div>
        </div>
      </div>
        `;
        postElements += postElement;
      });

      document.getElementById("posts").innerHTML = postElements;
    });
}

function newPost() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  if (title.trim() | (description.trim() === "")) {
    return;
  } else {
    let post = {
      title,
      description,
    };

    const options = {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(post),
    };

    fetch("/api/new", options).then((res) => {
      updatePosts();
      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
    });
  }
}
