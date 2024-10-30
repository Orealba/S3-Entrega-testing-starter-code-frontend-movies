function getAllDirectors(movies) {
  let result = movies.map(function (movie) {
    return movie.director;
  });
  console.log('EXERCISE 1 ->', result);
  return result;
}

function getMoviesFromDirector(array, director) {
  let moviesFromDirector = array.filter((movie) => movie.director === director);
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = getMoviesFromDirector(array, director);

  let average = moviesFromDirector.reduce(
    (sum, movie) => sum + (movie.score || 0),
    0
  );

  let averageScore = average / moviesFromDirector.length;

  return averageScore
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
