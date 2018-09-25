 $(onHtmlLoaded);
    
    // SearchBar Functionality //
function onHtmlLoaded() {
    


    var getShowsData = function(searchVal) {

    var options = {
      url: 'https://ancient-caverns-16784.herokuapp.com/movies?Title=' + searchVal,
      method: 'GET',
      success: filterMovies
    }

    $.ajax(options);
  }

                  
  $('#homeSearch').keyup(function(event) {
    if (event.which || event.keyCode === 13) {
      var query = $('[name="query"]').val()
      getShowsData(query);
    }
  });

  $('#srcBtn').on('click', function() {
      var query = $('[name="query"]').val()
      getShowsData(query);
//      displayMovie(query);
  });

    
    function filterMovies(data) {
    $('#movies').html(renderHtml(data));
  }   
    
    
    
 function renderHtml(data) {
  
     var html = `<ul>`
    // console.log(data.results.length);
    var length = data.results.length;
    for (i = 0; i < length; i++) {
      console.log(data.results[i].Title);
      var title = data.results[i].Title;
      var year = data.results[i].Year;
      var genre = data.results[i].Genre;
      // var url = data[i].show.url
      // console.log(data[i]);

      html += `<li>` + title + ' | ' + year + ' | ' + genre + `</li>`
    }

    html += `</ul>`
    return html;
  }
    }



    


    
