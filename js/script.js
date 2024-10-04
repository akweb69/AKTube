// ! access catagories
const loadCategories = () => {
  const url = "https://openapi.programming-hero.com/api/phero-tube/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};
function timeConvert(postDate) {
  let day = postDate / (60 * 60 * 24);
  day = parseInt(day);
  let remaining1 = postDate % (60 * 60 * 24);
  let hour = remaining1 / (60 * 60);
  hour = parseInt(hour);
  let remaining2 = remaining1 % (60 * 60);
  let min = remaining2 / 60;
  min = parseInt(min);
  let remaining3 = remaining2 % 60;
  let sec = parseInt(remaining3);
  if(day === 0){
    return ` ${hour}h ${min}m ${sec}Sec ago `
  }
  else if(hour === 0 ){
    return ` ${day}d  ${min}m ${sec}Sec ago `
  }
  else if(min === 0 ){
    return ` ${day}d ${hour}h ${sec}Sec ago `
  }
  
  else if(sec === 0 ){
      return ` ${day}d ${hour}h ${min}m  ago `
  }

  
  

 
  return ` ${day}d ${hour}h ${min}m ${sec}Sec ago `  ;
}
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
/**
 * {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}
 */
// ! displayVideos fucntion

const displayVideos = (data) => {
  const vdoBox = document.getElementById("vdo-container");
  for (video of data) {
    // 
    // console.log(video.others.posted_date);
    console.log(video);
    // 
    const card = document.createElement("card");
    card.classList = "card card-compact";
    card.innerHTML = `
    <figure class = "h-[205px] w-full relative" >
    <img class = "h-full w-full"
        src="${video.thumbnail} "
        alt="Shoes" />
     
      <div class = "absolute bottom-2 right-2 text-sm font-semibold ">
      ${video.others.posted_date.length === 0 ? "" :` <span>${timeConvert(video.others.posted_date)}</span>` }
      </div>
         
    </figure>
      
    <div class="px-0 py-2">
     <div class = "flex gap-2  ">
   
     <div><img class ="h-10 w-10 object-cover rounded-full" src = ${
       video.authors[0].profile_picture
     }></div>
   
    <div>
    <h2 class = "font-bold"> ${video.title} </h2>
    <div class = "flex items-center gap-2">
    <p class = "text-gray-400 font-semibold">${video.authors[0].profile_name} </p>
    <p>${
      video.authors[0].verified === true
        ? `<img width="20" height="20" src="https://img.icons8.com/fluency/48/verified-badge--v1.png" alt="verified-badge--v1"/>`
        : ""
    } </p>
    </div>
    <div>
    <p class = "text-gray-400 text-sm" >
      ${video.others.views} Views
    </p> </div>
    </div>
     </div>
  </div>
        `;

    vdoBox.appendChild(card);
  }
};

loadCategories();
loadVideos();
// console.log( timeConvert(45555))