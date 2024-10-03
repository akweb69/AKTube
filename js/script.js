// ! access catagories
const loadCategories = () => {
  const url = "https://openapi.programming-hero.com/api/phero-tube/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
// ! access videos objects

const loadVideos = () => {
  const url = "https://openapi.programming-hero.com/api/phero-tube/videos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
};
// ! display categories function

const displayCategories = (data) => {
  // console.log(data)
  const ctgBox = document.getElementById("btn-box");
  for (categories of data) {
    const createBtn = document.createElement("button");
    createBtn.classList = "ct-btn";
    createBtn.innerText = categories.category;
    ctgBox.appendChild(createBtn);
  }
};
// ! displayVideos fucntion

const displayVideos = (data) => {
  const vdoBox = document.getElementById("vdo-container");
  for (video of data) {
    console.log(video);
    const card = document.createElement("card");
    card.classList = "card card-compact";
    card.innerHTML = `
    <figure>
    <img
        src="${video.thumbnail} "
        alt="Shoes" />
    </figure>
    <div class="card-body">
    <h2 class="card-title">${video.title} </h2>
    <p>${video.description} </p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `;

    vdoBox.appendChild(card);
  }
};

loadCategories();
loadVideos();
