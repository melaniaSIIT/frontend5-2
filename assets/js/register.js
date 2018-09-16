$(domLoaded)


function domLoaded() {
  
  var registerBtn = $(".registerBtn");

  registerBtn.on("click", registerModal);
  
  function registerModal() {
    // Create Modal Container //
    var container = $("<div id='registerModal'></div>").addClass("modal fade");
    var containerAlign = $("<div></div>").addClass("modal-dialog modal-dialog-centered");

    // Create the content inside the modal //
    var content = $("<div></div>").addClass("modal-content");

    // Create modal header with Image //
    var header = $("<div></div>").addClass("modal-header");
    var image = $("<img src='https://fs.codeanywhere.com/file/open?token=64c47bf52353d4ae77fcd601572e89714790f253eb7d6e3e&connectionId=1689917&path=Project/CodeBusters/assets/images/register-img.jpg&encoding=UTF-8&id=32f2dceb052a586d10819269e45bea94&' alt='Register Image' >").addClass("img-fluid");

    // Create modal body //
    var body = $("<div></div>").addClass("modal-body");

    // Create form //
    var form = $("<form></form>");
    var formGroupUser = $("<div></div>").addClass("form-group")
    var formGroupPass = $("<div></div>").addClass("form-group")

    // Create Inputs //
    var userName = $("<input type='text' id='userReg' placeholder='Username'>").addClass("form-control");
    var password = $("<input type='password' id='passReg' placeholder='Password'>").addClass("form-control");

    // Create modal footer //
    var footer = $("<div></div>").addClass("modal-footer");

    // Create Login button //
    var registerButton = $("<button type='submit' id='btn-register' data-dismiss='modal'>Sign Up</button>").addClass("btn btn-danger");

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

    // Add modal footer //
    content.append(footer);

    // Setup Footer //
    footer.append(registerButton);

    function registerUser(event) {
      event.preventDefault()
      var user = $("#userReg").val();
      var password = $("#passReg").val();

      $.ajax({
        url: "https://ancient-caverns-16784.herokuapp.com/auth/register",
        method: "POST",
        data: {
          username: user,
          password: password
        },
        statusCode: {
          200: function (response) {
             console.log("You have successfully registered.")
          },
          409: function (response) {
             console.log(response.responseJSON.message)
          }
        },
        success: function(response) {
          localStorage.setItem("Token", response.accessToken);
          localStorage.setItem("Auth", response.authenticated);
          localStorage.setItem("Name", user);
          checkUser();
        }
      });
    }
    registerButton.on("click", registerUser);
  }
}