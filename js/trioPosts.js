import { posts } from "./blogPosts.js";

const trioPosts = posts.filter((p) => p.page === "Trio");
const noPostsMsg = document.createElement("p");
noPostsMsg.textContent = "No Posts Yet!";

// Trio Page
const trioContainer = document.querySelector("#trio-posts");
if (trioPosts.length === 0) {
  trioContainer.appendChild(noPostsMsg);
}
trioPosts.forEach((p) => {
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

  p.content.forEach((part) => {
    const contentPart = document.createElement("p");
    contentPart.textContent = part;
    blogPostCard.appendChild(contentPart);
  });

  trioContainer.appendChild(blogPostCard);
});
