import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchPictures } from './js/pixabay-api';
import { renderPicture } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.gallery'),
};

refs.searchForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const { searchtext } = form.elements;

  const query = searchtext.value.trim();
  if (query === '') {
    iziToast.error({
      title: 'Warning',
      message: 'Search query cannot be empty. Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  refs.gallery.innerHTML = '';
  showLoader();

  fetchPictures(query)
    .then(data => {
      if (data.hits.length === 0) {
        fetchError();
      } else {
        refs.gallery.insertAdjacentHTML('beforeend', renderPicture(data.hits));
        const lightbox = new SimpleLightbox('.gallery a', {});
      }
    })
    .catch(error => {
      fetchError(error);
    })
    .finally(() => {
      hideLoader();
    });
}

const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.innerHTML = '<div class="spinner"></div>';
  loader.style.display = 'flex';
};

const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
};

function fetchError() {
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
}
