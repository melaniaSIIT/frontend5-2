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
		
		const movie = {
	    	Title: movieTitle,
	    	Year: movieYear,
	      	imdbID: movieimdbID,
			Type: movieType,
			Poster: moviePoster
  		  };
	
		
		$.ajax({
   		 url: "https://ancient-caverns-16784.herokuapp.com/movies",
   		 method: "POST",
		headers: {
        		'X-Auth-Token': 'b80oqT2NRsAANP5GCf50lgTh5mNE3zuk'
        },
   		data: movie,
    		success: function(data){
			  console.log("Create movie", data);
			  let succesEl = document.createElement('p');
              succesEl.innerHTML = '<strong>Success!</strong> Movie posted with success!';
			  let container2=document.getElementById("succesPost");
			  container2.appendChild(succesEl);			  
			  }
		});
	});

	$('#resetForm').on('click', function(){
		$("#succesPost").empty();
	});

}