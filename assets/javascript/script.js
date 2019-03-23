$(document).ready(function () {

  //----- Materialize features ---------------------//
  $('.sidenav').sidenav();
  $('.slider').slider();
  $('.materialboxed').materialbox();
});

//  --- AJAX for Seatgeek --------------------------------------------------------------//
// -------------------- 
var cl = console.log;
// Add an event listener to Zip Code variable, limit it to mile range
var zipCode =  75211;
//Add an event listener for the drop-down radius of the miles
var mileRange= "10mi";
var queryURL = "https://api.seatgeek.com/2/events?geoip=" + zipCode + "&range=" + mileRange + "&client_id=MTU4NDc5NTh8MTU1MzEzMDYzNy4zNA";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
      cl(queryURL);
      cl(response);
      cl("Events: " + response.events);
  });




// //  --- AJAX for Seatgeek --------------------------------------------------------------//
// // -------------------- 
// var cl = console.log
// // var zipCode = $(this).attr("data-name");
// var zipCode = 75211
// var queryURL = "https://api.seatgeek.com/2/venues?postal_code=" + zipCode + "&client_id=MTU4NDc5NTh8MTU1MzEzMDYzNy4zNA";

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function (response) {
//       cl(queryURL);
//       cl(response);









      // //-- Initialize Firebase ----------------------------------------------//
      // var config = {
      //   apiKey: "AIzaSyAyBYJFRwwDHbOGYKG9CZkqtAinxmP6nDo",
      //   authDomain: "smu-g5-p1-eventpage.firebaseapp.com",
      //   databaseURL: "https://smu-g5-p1-eventpage.firebaseio.com",
      //   projectId: "smu-g5-p1-eventpage",
      //   storageBucket: "smu-g5-p1-eventpage.appspot.com",
      //   messagingSenderId: "48500713462"
      // };
      // firebase.initializeApp(config);