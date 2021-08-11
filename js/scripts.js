const numberFoFilmes = prompt('How many movies you have watched?');
const movies = {};
const personaMovieDB = {
    count: numberFoFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 1; i < 3; i++){
    let a = prompt('Name of the one of the last movies you have watched?'),
        b = prompt('What is your score for this movie?');
    
    if ( (a === null) || (b === null) || (a === '') || (b === '') || (a.length > 49 )|| (a.length > 50 ) ) {
        i--;
        console.log("error");
    } else {
        personaMovieDB.movies[a] = b;
    }
}
const g = personaMovieDB.count;

if( g < 10 ){
console.log("need more movies");
} else if ( 10 < g && g < 30) {
    console.log("thats good");
} else if (g > 30){
    console.log("enough");
} else {
    console.log("error");
}
console.log(movies);
console.log(personaMovieDB);
