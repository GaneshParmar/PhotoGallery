import { fetchPhotos } from './fetchData.js';



const searchBtn= document.getElementById("searchBtn");
const searchInput= document.getElementById("search")
const container = document.getElementById('container');
const userSearchText=document.getElementById('userSearchText');

var useStaggerd = true;

const performSearch=()=>{

    const searchQuery = searchInput.value;
    if(searchQuery == ""){
        return;
    }
    else{
        const image = document.createElement('img');
        image.src = './public/imges/loader.gif';
        image.alt = 'loading';
        image.width=300;
        image.style.top="50%";
        image.style.left="50%";
        // image.style.transform="translate(-50%,-50%)"
        container.innerHTML='';  
        container.appendChild(image);
        getPhotosByQuery(searchQuery);
        
        userSearchText.innerHTML=`<h3>You searched for ${searchQuery}</h3>`
    }
}


function getPhotosByQuery(query) {
    fetchPhotos(query)
    .then(
        fetchedPhotos=>{

            setTimeout(() => {
                updatePictureGrid(fetchedPhotos)
            }, 2000);

        }


    )
    .catch(err=> console.log(err))
}

function initializeMasonry() {
    var pictureGrid = document.getElementById('container');
    var masonry = new Masonry(pictureGrid, {
      itemSelector: '.picture-container',
      columnWidth: '.picture-container',
      gutter: 20
    });
  }
  

function updatePictureGrid(pictures) {
  
    container.innerHTML = '';
  
    // Iterate over retrieved pictures data
    pictures.forEach(picture => {
      const pictureContainer = document.createElement('div');
      pictureContainer.classList.add('picture-container');
  
      const image = document.createElement('img');
      image.src = picture.urls.thumb;
      image.width= picture.width;
      image.height = picture.height;
      image.alt = picture.description;
      pictureContainer.appendChild(image);
  
      const author = document.createElement('p');
      author.textContent = 'Author: ' + picture.user.name;
      pictureContainer.appendChild(author);
  
      const description = document.createElement('p');
      description.textContent = 'Description: ' + picture.description;
      pictureContainer.appendChild(description);
  
      const link = document.createElement('a');
      link.href = picture.links.html;
      link.textContent = 'View on Unsplash';
      pictureContainer.appendChild(link);
  
      container.appendChild(pictureContainer);
    });

    if(useStaggerd){
        initializeMasonry();
    }
  }
  

searchBtn.addEventListener('click', performSearch);

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});
