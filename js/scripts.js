'use strict';
let numberFoFilmes;
const movies = {};


const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        let x = prompt('How many movies you have watched?', '');
        while (x === '' || x === null || isNaN( x )){
            x = prompt('How many movies you have watched?', '');
        }
        personaMovieDB.count = +x;

    },
    rememberMyFilms: function (){
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
    },
    detectPersonalLevel: function (){
        if( personaMovieDB.count < 10 ){
            console.log("need more movies");
            } else if ( 10 < personaMovieDB.count && personaMovieDB.count < 30) {
                console.log("thats good");
            } else if (personaMovieDB.count > 30){
                console.log("enough");
            } else {
                console.log("error");
        }
    },
    showMyDB: function (){
        if (!personaMovieDB.privat) console.log( personaMovieDB );
    },
    writeYourGenres: function (){
        let x,
            i = 1;
        while ( i-- ){
            x = prompt(`List your favorite movies splitting them with comma`, '');
            if ( x === null || x === '' ) i++;
        }
        personaMovieDB.genres = x.toLocaleLowerCase().split(', ');
        personaMovieDB.genres.forEach( ( item, i ) => {
            console.log(`Favorite movie # ${ i + 1 } is ${ item }`);
        });
    },
    toggleVisibleMyDB: function (){
        personaMovieDB.privat = !personaMovieDB.privat;
    }
};




