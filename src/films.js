// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  return array.map((movie) => movie.director);
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((movie) => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const result = array
    .filter((movie) => movie.director === director)
    .reduce(
      (acum, movie) => {
        acum.totalScore += movie.score;
        acum.count++;
        return acum;
      },
      { totalScore: 0, count: 0 }
    );

  return parseFloat((result.totalScore / result.count).toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const sortedArray = [...array].sort((a, b) => a.title.localeCompare(b.title));
  const result = sortedArray.slice(0, 20).map((movie) => movie.title);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedArray = [...array].sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sortedArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const { totalScore, count } = array
    .filter(
      (movie) => movie.genre?.includes(genre) && typeof movie.score === 'number'
    )
    .reduce(
      (acc, movie) => {
        acc.totalScore += movie.score;
        acc.count++;
        return acc;
      },
      { totalScore: 0, count: 0 }
    );
  return count > 0 ? totalScore / count : 0;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array = []) {
  return array.map((movie) => {
    if (!movie.duration) return { ...movie, duration: 0 };

    const durationParts = movie.duration.split(' ');
    let durationInMinutes = 0;

    durationParts.forEach((time) => {
      if (time.includes('h')) {
        durationInMinutes += parseInt(time.split('h')[0]) * 60;
      } else if (time.includes('min')) {
        durationInMinutes += parseInt(time.split('min')[0]);
      }
    });
    return { ...movie, duration: durationInMinutes };
  });
}

// Exercise 8: Get the best film of a year

function bestFilmOfYear(array, year) {
  const moviesFilter = array.filter((movie) => movie.year === year);
  moviesFilter.sort((a, b) => b.score - a.score);
  return [moviesFilter[0]];
}

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
