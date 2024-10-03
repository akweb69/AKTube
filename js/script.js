// ! access catagories
const loadCategories = () => {
    const url = "https://openapi.programming-hero.com/api/phero-tube/categories" ;
    fetch(url)
    .then( res => res.json())
    .then(data => displayCategories(data.categories))
    .catch((error) => console.log(error))

} 
// ! display categories function

const displayCategories = (data) => {
    // console.log(data)
    const ctgBox = document.getElementById('btn-box');
    for (categories of data ){
        const createBtn = document.createElement("button");
        createBtn.classList = "ct-btn";
        createBtn.innerText = categories.category;
        ctgBox.appendChild(createBtn);

    }

}



loadCategories()