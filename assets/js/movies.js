$(domLoaded);

function domLoaded() {
  console.log("Dom loaded");

  var moviesModel = new Movies();
  moviesModel.getAll().then(displayAllMovies);
  console.log(Movies)

  function displayAllMovies(moviesData) {
    for (var i = 0; i < moviesData.results.length; i++) {
      var movie = new Movie(moviesData.results[i]);
      displayMovie(movie)
    }
  }

  function displayMovie(movie) {
    console.log("Movies: ", movie)
    // Main Container //
    var mainCont = $("#movies")

    // Create a card for each movie //
    var movieDiv = $("<div></div>").addClass("col-md-6 mt-2 mb-2");
    var movieCard = $("<div></div>").addClass("card bg-light text-dark");
    var movieCardBlk = $("<div></div>").addClass("card-header");

    // Create a div for title //
    var titleDiv = $("<div></div>").addClass("text-center");

    // Create the title with the results from the api between h4 tags //
    var title = $("<h4>" + movie.title + "</h4>").addClass("text-center");

    // Create HR line for title //
    var hrTitle = $("<hr>");

    // Create HR line for buttons //
    var hrButton = $("<hr>");

    // Create a new row for images and description //
    var rowDesc = $("<div></div>").addClass("row card-body");

    // Create a div for images with class col (collumn) //
    var colDivImg = $("<div></div>").addClass("col-md-6 border-right");

    // Create a div for description with class col (collumn)
    var colDivDesc = $("<div></div>").addClass("col-md-6");

    // Create the title with Description text between h4 tags //
    var description = $("<h4>Description</h4>").addClass("text-center");

    // Create an ul list //
    var list = $("<ul></ul>");
    var img = $(`<img src="` + movie.img + `">`).addClass("card-img-top");
    var type = $("<li>Type: " + movie.type + "</li>")
    var year = $("<li>Year: " + movie.year + "</li>")
    var rating = $("<li>Rating: " + movie.rating + "</li>")
    
    // Create the footer //
    var cardFooter = $("<footer></footer>").addClass("card-footer");
    
    // Create the button //
    var button = $("<button>More Info</button>").addClass("btn btn-primary btn-block");
    
    button.on("click", function() {
      window.location = "http://cursuri-robertdanielcsaszar97119.codeanyapp.com/Project/CodeBusters/assets/pages/movie.html?movieId=" + movie.id;
    })

    console.log("Titles: ", movie.title)
    // Add the movie container in the Main container //
    mainCont.append(movieDiv);

    // Add a card for each movie //
    movieDiv.append(movieCard);
    movieCard.append(movieCardBlk);

    // Add div for title //
    movieCardBlk.append(titleDiv);

    // Add the title between h4 tags //
    titleDiv.append(title);

    // Add hr under the title //
    movieCardBlk.append(hrTitle);

    // Add a new row for image and desc //
    movieCardBlk.append(rowDesc);

    // Add div with collumn class for image //
    rowDesc.append(colDivImg);

    // Add the image //
    colDivImg.append(img);

    // Create another div with collumn class for desc //
    rowDesc.append(colDivDesc);

    // Add description for each movie //
    colDivDesc.append(description);

    // Create a list with the description for each movie //
    colDivDesc.append(list);
    list.append(type);
    list.append(year);
    list.append(rating);

    // Add HR line under rowDesc //
    movieCardBlk.append(hrButton);

    // Add button with "More Info" text for each movie //
    movieCardBlk.append(cardFooter);
    
    // Add button with "More Info" text for each movie //
    cardFooter.append(button);
  }
}