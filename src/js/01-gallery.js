import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const divRef = document.querySelector('.gallery');

const createGalleryMarkUp = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
  })
  .join('');

divRef.insertAdjacentHTML('afterbegin', createGalleryMarkUp);

let lightboxGallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsDelay: '250ms',
});
