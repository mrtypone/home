fetch("posts.json")
  .then(response => response.json())
  .then(posts => {
      const postsContainer = document.getElementById("posts");
      posts.forEach(post => {
          const article = document.createElement("article");
          article.innerHTML = `
              <h2><a href="${post.link}">${post.title}</a></h2>
              <p>Published on ${post.date}</p>
          `;
          postsContainer.appendChild(article);
      });
  })
  .catch(error => console.error("Error loading posts:", error));

