import './style.scss';
import Http from './http/http';

(() => {
  window.onload = () => {
    const movieSearchForm = document.getElementById('movieSearchForm');
    movieSearchForm.onsubmit = onMovieSearchFormSubmit.bind(movieSearchForm);
  };
})();

const getSearchInputValue = () => {
  const searchInput = document.getElementById('movieSearchInput');

  return searchInput.value;
};

const onMovieSearchFormSubmit = event => {
  event.preventDefault();
  const searchInputValue = getSearchInputValue();
  const alertElement = document.querySelector('.app--movie-search-form-alert');
  alertElement.classList.remove('alert-visible');

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
        alertElement.classList.add('alert-visible');
      });
};

const fetchMoviesListByProvidedString = searchInputValue => {
  if (!searchInputValue) {
    return Promise.reject();
  }

  const http = new Http();
  const API_KEY = '5183373e8690ece35800a35005c8b68a';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchInputValue}&page=1&include_adult=false`;

  return http.get(url);
};

const populateListOfMovies = moviesList => {
  const moviesListSection = document.getElementById('moviesList');

  const moviesListTemplate = [];

  moviesList.forEach(movie => {
    moviesListTemplate.push(createTemplateForMovieCard(movie));
  });

  moviesListSection.innerHTML = moviesListTemplate.join('');
};

const createTemplateForMovieCard = movie => {
  const {poster_path, title = '', id} = movie;
  const imgSrc = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : './assets/images/blank.png';
  return `
    <div class="col-md-4">
        <div class="card" style="width: 100%;">
        <a href="https://www.themoviedb.org/movie/${id}" target="_blank">
            <img class="card-img-top" src="${imgSrc}" alt="${title}">
        </a>
        <div class="card-body">
          <h4 class="card-title">${title}</h4>
        </div>
      </div>
    </div>
  `;
};


