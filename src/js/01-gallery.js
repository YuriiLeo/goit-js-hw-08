import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


const galleryImgContainer = document.querySelector(".gallery");
const ImgMarkup = createImgMarkup(galleryItems);
galleryImgContainer.insertAdjacentHTML('beforeend', ImgMarkup);

function createImgMarkup (array) {
    return array
        .map(
            (item) => 
                `<a class="gallery__item" href="${item.original}">
                   <img 
                   class="gallery__image" 
                   src="${item.preview}" 
                   alt="${item.description}" />
                </a>`
    )
        .join("");
}

const lightbox = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});
   