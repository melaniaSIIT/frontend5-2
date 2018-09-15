$(domLoaded)


function domLoaded() {

  // Side Bar functionaity //
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
}

var checkUser = function() {
    var loginPanel = $(".login");
    var logOutBtn = $(".logout");
    var userPanel = $(".userPanel");
    var adminPanel = $(".admPanel");
    var token = localStorage.getItem("Token");
    var auth = localStorage.getItem("Auth");
    if (token && auth !== null) {
      loginPanel.hide();
      userPanel.show();
      adminPanel.show();
      logOutBtn.show();
    }
  }