// Constructor function for all Movies //
function Movies() {

}

// Get all Movies from the API //
Movies.prototype.getAll = function() {
  return $.get("https://ancient-caverns-16784.herokuapp.com/movies/")
}


// Constructor function for each Movie //
function Movie(options) {
  options = options || {};
  this.id = options._id;
  this.title = options.Title;
  this.img = options.Poster;
  this.type = options.Type;
  this.year = options.Year;
  this.rating = options.imdbRating;
}