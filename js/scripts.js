const numberFoFilmes = +prompt('How many movies you have watched?');
const movies = {};
const personaMovieDB = {
    count: numberFoFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Name of the one of the last movies you have watched?');
const b = +prompt('What is your score for this movie?');
const c = prompt('Name of the one of the last movies you have watched?');
const d = +prompt('What is your score for this movie?');
personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;
console.log(movies);
console.log(personaMovieDB);
