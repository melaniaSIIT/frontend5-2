$(domLoaded)

function domLoaded() {  
  var loginBtn = $(".loginBtn");

  loginBtn.on("click", loginModal);


  // Login Modal //

  function loginModal() {
    // Create Modal Container //
    var container = $("<div id='loginModal'></div>").addClass("modal fade");
    var containerAlign = $("<div></div>").addClass("modal-dialog modal-dialog-centered");

    // Create the content inside the modal //
    var content = $("<div></div>").addClass("modal-content");

    // Create modal header with Image //
    var header = $("<div></div>").addClass("modal-header");
    var image = $("<img src='https://fs.codeanywhere.com/file/open?token=64c47bf52353d4ae77fcd601572e89714790f253eb7d6e3e&connectionId=1689917&path=Project/CodeBusters/assets/images/login-img.jpg&encoding=UTF-8&id=4818c5faf16a6760ced07bf35241dda4&' alt='Login Image' >").addClass("img-fluid");

    // Create modal body //
    var body = $("<div></div>").addClass("modal-body");

    // Create form //
    var form = $("<form></form>");
    var formGroupUser = $("<div></div>").addClass("form-group")
    var formGroupPass = $("<div></div>").addClass("form-group")

    // Create Inputs //
    var userName = $("<input type='text' id='userName' placeholder='Username'>").addClass("form-control");
    var password = $("<input type='password' id='pwd' placeholder='Password'>").addClass("form-control");

    // Create Remember me checkbox //
    var rememberDiv = $("<div></div>").addClass("custom-control custom-checkbox mr-sm-2");
    var rememberInput = $("<input type='checkbox' id='customControlAutosizing'>").addClass("custom-control-input");
    var rememberMe = $("<label for='customControlAutosizing'>Remember me</label>").addClass("custom-control-label");

    // Create modal footer //
    var footer = $("<div></div>").addClass("modal-footer");

    // Create Login button //
    var loginButton = $("<button type='submit' id='btn-login' data-dismiss='modal'>Login</button>").addClass("btn btn-danger");

    $('body').append(container);

    // Setup the modal // 
    container.append(containerAlign);
    containerAlign.append(content);

    // Add modal header //
    content.append(header);

    // Add image in header //
    header.append(image);

    // Add modal body //
    content.append(body);

    // Add form in body //
    body.append(form);

    // Setup the form //
    form.append(formGroupUser);

    // Add the username input in form group//
    formGroupUser.append(userName);

    // Add form group for password input //
    form.append(formGroupPass);

    // Add the password input in the form group //
    formGroupPass.append(password);

    // Add the remember me div //
    form.append(rememberDiv);

    // Setup the remember me div //
    rememberDiv.append(rememberInput);
    rememberDiv.append(rememberMe);

    // Add modal footer //
    content.append(footer);

    // Setup Footer //
    footer.append(loginButton);

    function loginUser(event) {
      event.preventDefault()
      var user = $("#userName").val();
      var password = $("#pwd").val();
      $.ajax({
        url: "https://ancient-caverns-16784.herokuapp.com/auth/login",
        method: "POST",
        data: {
          username: user,
          password: password
        },
        statusCode: {
          200: function (response) {
             console.log("You have successfully logged in.")
          },
          401: function (response) {
             console.log(response.responseJSON.message)
          }
        },
        success: function(response) {
          localStorage.setItem("Token", response.accessToken);
          localStorage.setItem("Auth", response.authenticated);
          checkUser();
        }
      });
    }

    loginButton.on("click", loginUser);
  }

}