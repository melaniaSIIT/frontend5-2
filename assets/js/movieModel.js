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