export const populateListOfMovies = moviesList => {
  const moviesListSection = document.getElementById('moviesList');
  moviesListSection.innerHTML = createMoviesListArrayTemplate(moviesList).join('');
};

export const createMoviesListArrayTemplate = moviesList => {
  const moviesListTemplate = [];

  moviesList.forEach(movie => {
    moviesListTemplate.push(createTemplateForMovieCard(movie));
  });

  return moviesListTemplate;
};

export const createTemplateForMovieCard = movie => {
  const {poster_path, id, media_type} = movie;
  const title = movie.title || movie.name;
  const imgSrc = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://dummyimage.com/500x750/000/ffffff&text=no+photo';

  return `<div class="col-md-4">
        <div class="card" style="width: 100%;">
        <a href="https://www.themoviedb.org/${media_type}/${id}" target="_blank">
            <img class="card-img-top" src="${imgSrc}" alt="${title}">
        </a>
        <div class="card-body">
          <h4 class="card-title">${title}</h4>
        </div>
      </div>
    </div>`;
};
