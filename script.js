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

 
/*multiple image*/

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-image");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const indicator = document.querySelector(".image-indicator");

    let currentIndex = 0;
    let totalImages = images.length;

    function updateCarousel() {
        images.forEach((img, index) => {
            img.classList.remove("active");
            if (index === currentIndex) img.classList.add("active");
        });

        // Update image indicator count
        indicator.textContent = `${currentIndex + 1} / ${totalImages}`;
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Initialize the carousel
    updateCarousel();
});
