/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики


'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    let form = document.querySelector('.add'),
        genre = document.querySelector('.promo__genre'),
        submitBtn = form.querySelector('button'),
        movieList = document.querySelector('.promo__interactive-list'),
        poster = document.querySelector('.promo__bg'),
        typeArea = form.querySelector('.adding__input'),
        checkboxEl = document.querySelector('[type="checkbox"]'),
        ads = document.querySelectorAll('.promo__adv img');
        
    
        
    form.addEventListener('submit', ( e ) =>{
        e.preventDefault();
        let newMovie = ( typeArea.value.length <= 21 )? typeArea.value: `${typeArea.value.slice(0, 21)}...`;
        if ( typeArea.value ){
            movieDB.movies.push( newMovie );
            addMovieFromDB( movieDB.movies, movieList );
            typeArea.value = '';
            if ( checkboxEl.checked ) console.log('Favorite movie!');
        }
    });
    
    const delAdv = (arr) =>{
        arr.forEach( item => {
            item.remove();
        });
    };

    const changeBgAndGenre = () =>{
        genre.textContent = 'Drama';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    function addMovieFromDB ( db, list ) {
        list.innerHTML = '';
        db.sort().forEach ( ( item, i ) => {
            list.innerHTML += `<li class="promo__interactive-item">${ i + 1 }. ${ item }
                <div class="delete"></div>
            </li>`;
        });
        document.querySelectorAll('.delete').forEach(( bucket, i ) => {
            bucket.addEventListener('click', () => {
                bucket.parentElement.remove();
                db.splice( i, 1 );
                addMovieFromDB( movieDB.movies, movieList );
            });
        });
    }

    changeBgAndGenre();
    delAdv( ads );
    addMovieFromDB( movieDB.movies, movieList );
});