$(document).ready(function () {
  //----- Materialize features ---------------------//
  $('.sidenav').sidenav();
  $('.slider').slider();
  $('.materialboxed').materialbox();
  $('textarea#textarea').characterCounter();


var cl = console.log;

//  --- AJAX for Seatgeek --------------------------------------------------------------//

// // Add an event listener to Zip Code variable, limit it to mile range
// var zipCode =  75211;
// //Add an event listener for the drop-down radius of the miles
// var mileRange= "10mi";
// var queryURL = "https://api.seatgeek.com/2/events?geoip=" + zipCode + "&range=" + mileRange + "&client_id=MTU4NDc5NTh8MTU1MzEzMDYzNy4zNA";

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function (response) {
//       cl(queryURL);
//       cl(response);
//       cl("Events: " + response.events);
//   });


//  --- Firebase for contact form------------------------------------------------------//

  var config = {
    apiKey: "AIzaSyB57NQ2m4VxhU4-b6LORPi4MPDeCC5POMU",
    authDomain: "smu-p1-g5.firebaseapp.com",
    databaseURL: "https://smu-p1-g5.firebaseio.com",
    projectId: "smu-p1-g5",
    storageBucket: "smu-p1-g5.appspot.com",
    messagingSenderId: "1039960867810"
  };

  firebase.initializeApp(config);
  var fdb = firebase.database();

  var firstName = "";
  var lastName = "";
  var email = "";
  var message = "";

  $("#contact-form-submit").on("click", function(event) {
    event.preventDefault();
    formInput();
  });


  function formInput(){

    firstName = $("#input-first-name").val().trim();
    lastName = $("#input-last-name").val().trim();
    email = $("#input-email").val().trim();
    message = $("#input-message").val().trim();
    cl(firstName);

    fdb.ref().push({
      firstName : firstName,
      lastName : lastName,
      email : email,
      message : message,
      });
  }

  fdb.ref().on("child_added", function(childSnapshot) {
    var fsv = childSnapshot.val();

    var contactResponseText = (fsv.firstName + ", thank you for contacting us. You will hear from us soon.");
    $(".contact-info-text").append(contactResponseText);
  },
    function(errorObject) {
      cl("The read failed: " + errorObject.code);

    }); 
});




