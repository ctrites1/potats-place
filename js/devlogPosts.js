import { posts } from "./blogPosts.js";

const noPostsMsg = document.createElement("p");
noPostsMsg.textContent = "No Posts Yet!";

const devlogPosts = posts.filter((p) => p.page === "Devlogs");

// Devlogs Page
const devlogContainer = document.querySelector("#devlog-posts");
if (devlogPosts.length === 0) {
  devlogContainer.appendChild(noPostsMsg);
}
devlogPosts.forEach((p) => {
  const blogPostCard = document.createElement("article");
  blogPostCard.classList.add("blog-post");
  blogPostCard.classList.add("card");
  const cardHeaderDiv = document.createElement("div");
  cardHeaderDiv.classList.add("blog-header");

  const cardHeader = document.createElement("h2");
  cardHeader.textContent = p.title;
  const cardDate = document.createElement("p");
  cardDate.textContent = p.date;

  const divider = document.createElement("div");
  divider.classList.add("divider-horizontal");

  cardHeaderDiv.appendChild(cardHeader);
  cardHeaderDiv.appendChild(cardDate);

  blogPostCard.appendChild(cardHeaderDiv);
  blogPostCard.appendChild(divider);
  blogPostCard.appendChild(content);

  p.content.forEach((part) => {
    const contentPart = document.createElement("p");
    contentPart.textContent = part;
    blogPostCard.appendChild(contentPart);
  });

  devlogContainer.appendChild(blogPostCard);
});
