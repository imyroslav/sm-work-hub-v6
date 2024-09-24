import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
{
preview:
'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
original:
'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
description: 'Hokkaido Flower',
},
{
preview:
'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
original:
'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
description: 'Container Haulage Freight',
},
{
preview:
'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
original:
'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
description: 'Aerial Beach View',
},

];

const list =document.querySelector("ul.gallery")
const markupGallery = images
.map((image) => `<li class="gallery-item">
<a class="gallery-link" href="${image.original}">
<img 
class="gallery-image"
src="${image.preview}"
alt="${image.description}"> 
</a>
</li>`) 
.join(""); 
list.insertAdjacentHTML("beforeend", markupGallery);

const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});