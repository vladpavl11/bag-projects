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

////jquery custom scripts

$(document).ready(function(){
  var inputWhite = $('input.whitebag-text'),
      labelWhite = $('svg > text > .whiteBagtxt'),
      inputBlack = $('input.blackbag-text'),
      labelBlak = $('svg > text > .blackBagTxt')

  inputWhite.bind('keydown keypress', function() {
      setTimeout(function() {
          labelWhite.text(inputWhite.val());
      }, 0);
  });
   inputBlack.bind('keydown keypress', function() {
      setTimeout(function() {
          labelBlak.text(inputBlack.val());
      }, 0);
  });
            

  $('.wb').on('click touchstart', function () {
      var colorValue = $(this).children('input').val();
      console.log(colorValue);

      changeFontColor(colorValue);
  });
   $('.bb').on('click touchstart', function () {
      var colorValue = $(this).children('input').val();
      console.log(colorValue);

      changeBbFontColor(colorValue);
  });
  function changeFontColor(colorValue) {
    $('svg > text > .whiteBagtxt').css("fill", colorValue);
  }
  function changeBbFontColor(colorValue) {
    $('svg > text > .blackBagTxt').css("fill", colorValue);
  }

  // Accordion Image trigger select

  $(document).on('click','.item-link',function() {
      var active = $(this).attr("data-slide");
      if ($(this).hasClass('accordion-active')) {
      }else{

          $('.item-link').removeClass('accordion-active');
          $('.image-container').not( document.getElementsByClassName(active)).removeClass('active').animate({opacity: '0'}, 300);

          $(this).addClass('accordion-active');
                $('.'+active).animate({
                  opacity: '1',
                }, 300).addClass('active');          
       }

    });

  ///optout check boxes
  $('.optoutWhite').on('click',function() {
    console.log('sdfs');
     $('.wb').toggleClass('opacityToggle');
   });
  $('.optoutBlack').on('click',function() {
     $('.bb').toggleClass('opacityToggle');
   });






});