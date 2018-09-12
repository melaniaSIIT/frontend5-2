$(onhtmlloaded);

function onhtmlloaded() {
console.log("DOM Loaded.");

	$('#addMovie').on('click', function(event){
		event.preventDefault();
		
		//alert('S-a apasat.');
		let movieTitle=$('[name="title"]').val();
		console.log("Movie title:", movieTitle);
	   	let movieYear=$('[name="year"]').val();
		let movieimdbID=$('[name="imdbID"]').val();
		let movieType=$('[name="type"]').val();
		let moviePoster=$('[name="poster"]').val();
		
		const movie = new Movie({
	    	Title: movieTitle,
	    	Year: movieYear,
	      	imdbID: movieimdbID,
			Type: movieType,
			Poster: moviePoster
			});
				
	movie.AddMovie();
	
		});

	$('#resetForm').on('click', function(){
		$("#succesPost").empty();
	});

}