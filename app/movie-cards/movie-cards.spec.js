import {createMoviesListArrayTemplate, createTemplateForMovieCard} from './movie-cards';

const moviesList = [
  {
    poster_path: '/bIuOWTtyFPjsFDevqvF3QrD1aun.jpg',
    id: 2000,
    media_type: 'movie',
    title: 'Title 1'
  },
  {
    poster_path: '/aIuOWTtyFPjsFDevqvF3QrD1aun.jpg',
    id: 2001,
    media_type: 'movie',
    name: 'Title 2'
  },
  {
    id: 2002,
    media_type: 'tv',
    title: 'Title 3'
  }
];

describe('MovieCards', () => {
  describe('when calling createMoviesListArrayTemplate', () => {
    describe('and passing movies list with 3 items', () => {
      it('should return array with 3 templates', () => {
        const moviesListTemplate = createMoviesListArrayTemplate(moviesList);

        expect(moviesListTemplate.length).toEqual(3);
      });
    });
  });

  describe('when calling createTemplateForMovieCard', () => {
    describe('and pass item', () => {
      it('should return template for movie card', () => {
        const template = createTemplateForMovieCard(moviesList[0]);
        const expectedTemplate = `<div class="col-md-4">
        <div class="card" style="width: 100%;">
        <a href="https://www.themoviedb.org/movie/2000" target="_blank">
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/bIuOWTtyFPjsFDevqvF3QrD1aun.jpg" alt="Title 1">
        </a>
        <div class="card-body">
          <h4 class="card-title">Title 1</h4>
        </div>
      </div>
    </div>`;

        expect(template).toEqual(expectedTemplate);
      });
    });
  });
});
