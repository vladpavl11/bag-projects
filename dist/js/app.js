// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
$(document).ready(function(){
  var input = $('input.whitebag-text'),
      label = $('svg > text > textPath');

  input.bind('keydown keypress', function() {
      setTimeout(function() {
          label.text(input.val());
      }, 0);
  });
  
  $('.item-radio').on('click touchstart', function () {
      var colorValue = $(this).children('input').val();
      console.log(colorValue);

      changeFontColor(colorValue);
  });
  function changeFontColor(colorValue) {
    $('svg > text > textPath').css("fill", colorValue);
  }

  ///checkbox radio
  // var selectedBox = null;
  // $(".colorBox").click(function() {
  //     selectedBox = this.id;

  //     $(".colorBox").each(function() {
  //         if ( this.id == selectedBox )
  //         {
  //             this.checked = true;
  //         }
  //         else
  //         {
  //             this.checked = false;
  //         };        
  //     });
  // });    






});