$(onhtmlloaded);

function onhtmlloaded() {
    $('#logOutButton').on('click', function() {
        let userToken=localStorage.getItem("Token");   
        $.ajax({
            url: "https://ancient-caverns-16784.herokuapp.com/auth/logout",
            method: "GET",
            headers: {
                'X-Auth-Token': userToken
            },
            statusCode: {
                    200: function (response) {
                       console.log("User logged out successfully.");
                    },
                    403: function (response) {
                       console.log("You have to be logged-in in order to log out");
                    }
                
            },
            success: function(response) {
              alert("User log out!");
              localStorage.clear();
              location.reload();
            }
          });
    
      });
}