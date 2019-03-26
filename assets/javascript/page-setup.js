$(document).ready(function () {


function createNavbar(){

  var navbarContent = $('<div class="nav-wrapper container"></div>');
    navbarContent.append($('<a id="logo-container" href="index.html" class="right rand-logo"><img src="assets/images/logo-fav.png"></a>'));
    navbarContent.append($('<a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>'));

  var navbarMenu = $('<ul class="left hide-on-med-and-down menu-text"></ul>');
    navbarMenu.append($('<li><a class="blue accent-4 btn-flat">News Letter Sign-Up</a></li>'));
    navbarMenu.append($('<li><a href="index.html">Home</a></li>'));
    navbarMenu.append($('<li><a href="events.html">Events</a></li>'));
    navbarMenu.append($('<li><a href="movies.html">Movies</a></li>'));
    navbarContent.append(navbarMenu);

  var navbarMobileMenu = $('<ul class="sidenav" id="mobile-demo"></ul>');
    navbarMobileMenu.append($('<li><a href="index.html">Home</a></li>'));
    navbarMobileMenu.append($('<li><a href="events.html">Events</a></li>'));
    navbarMobileMenu.append($('<li><a href="movies.html">Movies</a></li>'));
    navbarContent.append(navbarMobileMenu);
   
  $(".navigation").append(navbarContent);
}
createNavbar();

function createFooter(){
  var rowIcon = $('<div class="row row-icons"></div>');
  var socialMediaIcons = $('<ul class="icons"></ul>');
  socialMediaIcons.append($('<li><a class="sm-icon" href="assets/images/Facebook.png"><img src="assets/images/facebook-logo.png"></a></li>'));
  socialMediaIcons.append($('<li><a class="sm-icon" href="assets/images/Twitter.png"><img src="assets/images/twitter-logo.png"></li>'));
  socialMediaIcons.append($('<li><a class="sm-icon" href="assets/images/Instagram.png"><img src="assets/images/instagram-logo.png"></a></li>'));
  socialMediaIcons.append($('<li><a class="sm-icon" href="assets/images/YouTube.png"><img src="assets/images/YouTube-logo.png"></a></li>'));
  rowIcon.append(socialMediaIcons);
  $(".page-footer").append(rowIcon);

  var rowLinks = $('<div class="row row-links"></div>');
  var pageLinks = $('<ul class="links"></ul>');
  pageLinks.append($('<li><a class="black-text link-position" href="about.html">About Us</a></li>'));
  pageLinks.append($('<li><a class="black-text link-position" href="contact.html">Contact Us</a></li>'));
  rowLinks.append(pageLinks);
  $(".page-footer").append(rowLinks);

  var rowCopyright = $('<div class="footer-copyright black"></div>');
  var copyrightContainer = $('<div class="container"></div>');
  copyrightContainer.append($('<a class="white-text">© Local Event Spotter 2019. All rights reserved.</a>'));
  rowCopyright.append(copyrightContainer);
  $(".page-footer").append(rowCopyright);
}
createFooter();

function createTextBanner(){

  var bannerLogo= $('<div class="banner-logo center"></div>');
  bannerLogo.append($('<a href="index.html"><img src="assets/images/logo-6.png"></a>'));
  $(".row-1").append(bannerLogo);

  var filterFields= $('<div class="filter-fields"></div>');

  var datePicker= $('<div class="date-field col l3"></div>');
  datePicker.append($('<input type= "date" class= "datepicker"></input>'));
  filterFields.append(datePicker);

  var zipCodeField= $('<div class="input-field col l2"></div>');
  zipCodeField.append($('<input class id="zip" name= "zip" type="text" required pattern="[0-9]{5}"></input>'));
  zipCodeField.append($('<label class="label-icon grey-text" for="search">Enter a zip code</label>'));
  filterFields.append(zipCodeField);

  var zipCodeMilesSelect= $('<select id="range" class="browser-default col l2"></select>');
  zipCodeMilesSelect.append($('<option value="" disabled selected>Miles Radius</option>'));
  zipCodeMilesSelect.append($('<option value="1">5</option>'));
  zipCodeMilesSelect.append($('<option value="2">10</option>'));
  zipCodeMilesSelect.append($('<option value="3">25</option>'));
  zipCodeMilesSelect.append($('<option value="3">50</option>'));
  filterFields.append(zipCodeMilesSelect);

  var zipCodeMilesLabel= $('<label class="label-icon grey-text" for="search"></label>');
  filterFields.append(zipCodeMilesLabel);

  var goButton= $('<button class="btn waves-effect waves-light" id="go-btn" type="submit" name="action"><i class="material-icons right">send</i></button>')
  filterFields.append(goButton); 
 
 $(".row-3").append(filterFields);
}

createTextBanner();
  
});