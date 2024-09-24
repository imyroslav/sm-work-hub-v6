import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
{
preview:
'./img/preview-object-1.jpg',
original:
'./img/original-object-1.jpg',
description: 'Hokkaido Flower',
},
{
preview:
'./img/preview-object-2.jpg',
original:
'./img/original-object-2.jpg',
description: 'Container Haulage Freight',
},
{
preview:
'./img/preview-object-3.jpg',
original:
'./img/original-object-3.jpg',
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