const url = "https://nadine-benowska.no/wp-json/wp/v2/posts";

const resultsContainer = document.querySelector(".results");

async function getRecipes() {

  const response = await fetch(url);

  const results = await response.json();

  console.log(results);

  const posts = results.all;

  resultsContainer.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].text);

    if (i===9) {
      break;
    }

    resultsContainer.innerHTML +=`<div class="result">${posts[i].text}</div>`;
  }

}

getRecipes();