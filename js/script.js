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
    <figure class = "h-[190px] w-full" >
    <img class = "h-full w-full"
        src="${video.thumbnail} "
        alt="Shoes" />
    </figure>
    <div class="px-0 py-2">
     <div class = "flex gap-2 items-center ">
   
     <div><img class ="h-10 w-10 object-cover rounded-full" src = ${video.authors[0].profile_picture}></div>
   
    <div>
    <h2 class = "font-bold"> ${video.title} </h2>
    <div class = "flex items-center gap-2">
    <p>${video.authors[0].profile_name} </p>
    <p> <img width="20" height="20" src="https://img.icons8.com/fluency/48/verified-badge--v1.png" alt="verified-badge--v1"/></p>
    </div>
    </div>
     </div>
  </div>
        `;

    vdoBox.appendChild(card);
  }
};

loadCategories();
loadVideos();
