$(document).ready(function () {

function createNavbar(){

  var navbarContent = $('<div class="nav-wrapper container">');
    navbarContent.append($(' <a id="logo-container" href="index.html" class="brand-logo"><img src="assets/images/logo-fav.png"></a>'));
    navbarContent.append($('<a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>'));

  var navbarMenu = $('<ul class="right hide-on-med-and-down menu-text">');
    navbarMenu.append($('<li><a href="index.html">Home</a></li>'));
    navbarMenu.append($('<li><a href="events.html">Events</a></li>'));
    navbarMenu.append($('<li><a href="movies.html">Movies</a></li>'));
    navbarContent.append(navbarMenu);

  var navbarMobileMenu = $('<ul id="nav-mobile" class="sidenav">');
    navbarMobileMenu.append($('<li><a href="index.html">Home</a></li>'));
    navbarMobileMenu.append($('<li><a href="events.html">Events</a></li>'));
    navbarMobileMenu.append($('<li><a href="movies.html">Movies</a></li>'));
    navbarContent.append(navbarMobileMenu);

  $(".navigation").append(navbarContent);
}
createNavbar();

function createFooter(){
  var rowIcon = $('<div class="row row-icons">');
  var socialMediaIcons = $('<ul class="icons">');
  socialMediaIcons.append($('<li><a class="sm-icon" href="assets/images/Facebook.png"><img src="assets/images/facebook-logo.png"></a></li>'));
  socialMediaIcons.append($('<li><a class="sm-icon" href="assets/images/Twitter.png"><img src="assets/images/twitter-logo.png"></li>'));
  socialMediaIcons.append($('<li><a class="sm-icon" href="assets/images/Instagram.png"><img src="assets/images/instagram-logo.png"></a></li>'));
  socialMediaIcons.append($('<li><a class="sm-icon" href="assets/images/YouTube.png"><img src="assets/images/YouTube-logo.png"></a></li>'));
  rowIcon.append(socialMediaIcons);
  $(".page-footer").append(rowIcon);

  var rowLinks = $('<div class="row row-links">');
  var pageLinks = $('<ul class="links">');
  pageLinks.append($('<li><a class="black-text link-position" href="about.html">About Us</a></li>'));
  pageLinks.append($('<li><a class="black-text link-position" href="contact.html">Contact Us</a></li>'));
  rowLinks.append(pageLinks);
  $(".page-footer").append(rowLinks);

  var rowCopyright = $('<div class="footer-copyright black">');
  var copyrightContainer = $('<div class="container">');
  copyrightContainer.append($('<a class="white-text">© Local Event Spotter 2019. All rights reserved.</a>'));
  rowCopyright.append(copyrightContainer);
  $(".page-footer").append(rowCopyright);
}
createFooter();

function createTextBanner(){

  var bannerLogo= $('<div class="banner-logo center">');
  bannerLogo.append($('<a href="index.html"><img src="assets/images/logo-6.png"></a>'));
  $(".row-1").append(bannerLogo);

  var zipCodeInput= $('<form class=" zip-code-input col s10 offset-s3">');

  var zipCodeField= $('<div class="input-field ">');
  zipCodeField.append($('<input class id="zip" name= "zip" type="text" required pattern="[0-9]{5}">'));
  zipCodeField.append($('<label class="label-icon grey-text" for="search">Enter a zip code</label>'));
  zipCodeInput.append(zipCodeField);

  var zipCodeMilesSelect= $('<select class="browser-default">');
  zipCodeMilesSelect.append($('<option value="" disabled selected>Mile from Zip Code</option>'));
  zipCodeMilesSelect.append($('<option value="1">5 Miles</option>'));
  zipCodeMilesSelect.append($('<option value="2">10 Miles</option>'));
  zipCodeMilesSelect.append($('<option value="3">25 Miles</option>'));
  zipCodeMilesSelect.append($('<option value="3">50 Miles</option>'));
  zipCodeInput.append(zipCodeMilesSelect);

  var zipCodeMilesLabel= $('<label class="label-icon grey-text" for="search"></label>');
  zipCodeInput.append(zipCodeMilesLabel);

 $(".row-3").append(zipCodeInput);
}
createTextBanner();


});



