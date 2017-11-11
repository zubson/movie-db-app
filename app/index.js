import './style.scss';
import {onMovieSearchFormSubmit} from './search-form/search-form';

(() => {
  window.onload = () => {
    const movieSearchForm = document.getElementById('movieSearchForm');
    movieSearchForm.onsubmit = onMovieSearchFormSubmit.bind(movieSearchForm);
  };
})();
