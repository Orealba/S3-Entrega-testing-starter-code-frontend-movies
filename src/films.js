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

function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = getMoviesFromDirector(array, director);

  let average = moviesFromDirector.reduce(
    (sum, movie) => sum + (movie.score || 0),
    0
  );

  let averageScore = average / moviesFromDirector.length;

  return averageScore;
}

function orderAlphabetically(array) {
  let orderMovies = array.slice().sort((first, second) => {
    if (first.title < second.title) {
      return -1;
    }
    if (first.title > second.title) {
      return 1;
    }
    return 0;
  });
  return orderMovies.slice(0, 20).map((movie) => movie.title);
}

function orderByYear(array) {
  return array.slice().sort((first, second) => {
    if (first.year < second.year) {
      return -1;
    }
    if (first.year > second.year) {
      return 1;
    }

    if (first.title < second.title) {
      return -1;
    }
    if (first.title > second.title) {
      return 1;
    }

    return 0;
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,category) {
  let filteredMovies = array.filter((movie) => movie.genre.some((genre)=> genre ===  category));

  let totalScore = filteredMovies.reduce((accumulator, movie) => {
    return accumulator + (movie.score || 0);
  }, 0);

  let averageScore = totalScore / filteredMovies.length;

  return isNaN(averageScore) ? 0 : averageScore;
}

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
