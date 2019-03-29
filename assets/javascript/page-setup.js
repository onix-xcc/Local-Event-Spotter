$(document).ready(function () {

  //----- jQuery for Navigation HTML content and features ---------------------//
  function createNavbar(){

    var navbarContent = $('<div class="nav-wrapper container"></div>');
    var navbarMobileMenuTrigger = $('<a href="#" data-target= "dropdown1" class="dropdown-trigger left hide-on-med-and-up"><i class="material-icons">menu</i></a>'); 
    var signUpBtnTrigger = $(' <button data-target="modal1" type="submit" name="action" class="btn modal-trigger right">Sign Up</button>');
    navbarContent.append(navbarMobileMenuTrigger,signUpBtnTrigger);
    
    //---creates navbar menu on all pages (bigger screen)----------------------//
    var navbarMenu = $('<ul class="center hide-on-small-only menu-text"></ul>');
    navbarMenu.append($('<li><a id="logo-container" href="index.html" class="left"><img src="assets/images/logo-home.png"></a></li>'));
    navbarMenu.append($('<li><a href="events.html">Events</a></li>'));
    navbarMenu.append($('<li><a href="movies.html">Movies</a></li>'));
    navbarContent.append(navbarMenu);

    //---creates mobile navbar menu on all pages (replaces menu on small screen----//
    var navbarMobileMenu = $('<ul class="dropdown-content" id="dropdown1"></ul>');
    navbarMobileMenu.append($('<li><a href="index.html">Home</a></li>'));
    navbarMobileMenu.append($('<li><a href="events.html">Events</a></li>'));
    navbarMobileMenu.append($('<li><a href="movies.html">Movies</a></li>'));
    navbarContent.append(navbarMobileMenu);
  
     //---creates sign up button and email sign up form on modal window ----//
    var signUpBox = $('<div id="modal1" class="modal white">');
    var signUpContent= $('<div class="modal-content">');
    signUpContent.append($('<p>To receive a weekly newsletter from us, please fill in your email below</p>'));
    var emailSignUpField= $('<form class="row"><div class="input-field col s12"><input id="email-sign-up" type="email" class="validate"><span class="helper-text" data-error="not a valid email format" data-success="right"></span><label id="email-box" for="email">Email</label></div></form>');
    signUpBox.append(signUpContent,emailSignUpField);

    // creates modal footer and #submit-email button --- linked to firebase---//
    var signUpFooter = $('<div class="modal-footer white">');
    signUpFooter.append($('<a href="#!" class="modal-close waves-effect waves-green btn-flat" id="submit-email">Submit</a>'));
    signUpBox.append(signUpFooter);
    navbarContent.append(signUpBox);

    $(".navigation").append(navbarContent);
  }
  createNavbar();


  //----- jQuery for Text Banner HTML content and features ---------------------//
  function createTextBanner(){

    //---Logo----//
    var bannerLogo= $('<div class="banner-logo center"></div>');
    bannerLogo.append($('<a id="logo" href="index.html"><img src="assets/images/logo-6.png"></a>'));
    $(".row-1").append(bannerLogo);

    //---Filters----//
    var filterFields= $('<div class="filter-fields"></div>');

    //----- drop down calendar for date filter ------//
    var datePicker= $('<div class="date-field col l3"></div>');
    datePicker.append($('<input type= "date" class= "datepicker"></input>'));
    filterFields.append(datePicker);

    //-----input field for zip code ------//
    var zipCodeField= $('<div class="input-field col l2"></div>');
    zipCodeField.append($('<input class id="zip" name= "zip" type="text" required pattern="[0-9]{5}"></input>'));
    zipCodeField.append($('<label class="label-icon grey-text" for="search">Zip Code</label>'));
    filterFields.append(zipCodeField);

    //-----drop menu for mile range ------//
    var zipCodeMilesSelect= $('<select id="range" class="browser-default col l2"></select>');
    zipCodeMilesSelect.append($('<option value="" disabled selected>Miles Radius</option>'));
    zipCodeMilesSelect.append($('<option>10</option>'));
    zipCodeMilesSelect.append($('<option>25</option>'));
    zipCodeMilesSelect.append($('<option>50</option>'));
    zipCodeMilesSelect.append($('<option>75</option>'));
    filterFields.append(zipCodeMilesSelect);

    var zipCodeMilesLabel= $('<label class="label-icon grey-text" for="search"></label>');
    filterFields.append(zipCodeMilesLabel);

    //----- filter submit button to generate search----//
    var goButton= $('<button class="col l1 btn waves-effect waves-light" id="go-btn" type="submit" name="action">Go<i class="material-icons right">send</i></button>')
    filterFields.append(goButton); 
  
  $(".row-3").append(filterFields);
  }
  createTextBanner();

  //----- jQuery for Footer HTML and content---------------------//

  // ------ creates social media site links and icons in footer ------//
  function createFooter(){
    var rowIcon = $('<div class="row center row-icons"></div>');
    var socialMediaIcons = $('<ul class="icons"></ul>');
    socialMediaIcons.append($('<li><a class="sm-icon" href="assets/images/Facebook.png"><img src="assets/images/facebook-logo.png"></a></li>'));
    socialMediaIcons.append($('<li><a class="sm-icon" href="assets/images/Twitter.png"><img src="assets/images/twitter-logo.png"></li>'));
    socialMediaIcons.append($('<li><a class="sm-icon" href="assets/images/Instagram.png"><img src="assets/images/instagram-logo.png"></a></li>'));
    socialMediaIcons.append($('<li><a class="sm-icon" href="assets/images/YouTube.png"><img src="assets/images/YouTube-logo.png"></a></li>'));
    rowIcon.append(socialMediaIcons);
    $(".page-footer").append(rowIcon);

    // ------ creates site links to about and contact us pages in footer ------//
    var rowLinks = $('<div class="row center row-links"></div>');
    var pageLinks = $('<ul class="links"></ul>');
    pageLinks.append($('<li><a class="black-text link-position" href="about.html">About Us</a></li>'));
    pageLinks.append($('<li><a class="black-text link-position" href="contact.html">Contact Us</a></li>'));
    rowLinks.append(pageLinks);
    $(".page-footer").append(rowLinks);

     // ------ creates copyright footer---last row on page------//
    var rowCopyright = $('<div class="footer-copyright center black"></div>');
    var copyrightContainer = $('<div class="container"></div>');
    copyrightContainer.append($('<a class="white-text">© Local Event Spotter 2019. All rights reserved.</a>'));
    rowCopyright.append(copyrightContainer);
    $(".page-footer").append(rowCopyright);
  }
  createFooter();

});

  