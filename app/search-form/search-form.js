import Http from './../http/http';
import {populateListOfMovies} from './../movie-cards/movie-cards';

const alertElement = document.querySelector('.app--movie-search-form-alert');
const searchInput = document.getElementById('movieSearchInput');

const getSearchInputValue = () => {
  return searchInput.value;
};

const fetchMoviesListByProvidedString = searchInputValue => {
  if (!searchInputValue) {
    return Promise.reject();
  }

  const http = new Http();
  const API_KEY = '5183373e8690ece35800a35005c8b68a';
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${searchInputValue}&page=1&include_adult=false`;

  return http.get(url);
};

const hideAlert = () => {
  alertElement.classList.remove('alert-visible');
};

const showAlert = () => {
  alertElement.classList.add('alert-visible');
};

export const onMovieSearchFormSubmit = event => {
  event.preventDefault();
  hideAlert();
  const searchInputValue = getSearchInputValue();

  if (!searchInputValue) {
    return;
  }

  fetchMoviesListByProvidedString(searchInputValue)
      .then(data => {
        const parsedData = JSON.parse(data);
        const moviesList = parsedData.results || [];
        populateListOfMovies(moviesList);
      })
      .catch(() => {
        showAlert();
      });
};
