$(document).ready(function (){

  //----- Materialize features ---------------------//

  $('.slider').slider({full_width: true});
  $('.materialboxed').materialbox();
  $('textarea#textarea').characterCounter();
  $('.sidenav').sidenav();
 

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

    // //-- Initialize Firebase ----------------------------------------------//
    // var config = {
    // apiKey: "AIzaSyAyBYJFRwwDHbOGYKG9CZkqtAinxmP6nDo",
    // authDomain: "smu-g5-p1-eventpage.firebaseapp.com",
    // databaseURL: "https://smu-g5-p1-eventpage.firebaseio.com",
    // projectId: "smu-g5-p1-eventpage",
    // storageBucket: "smu-g5-p1-eventpage.appspot.com",
    // messagingSenderId: "48500713462"
    // };
    // firebase.initializeApp(config);


  $("#contact-form-submit").on("click", function() {
    // event.preventDefault();


    firstName = $("#input-first-name").val().trim();
    lastName = $("#input-last-name").val().trim();
    email = $("#input-email").val().trim();
    message = $("#input-message").val().trim();


    fdb.ref().push({
      firstName : firstName,
      lastName : lastName,
      email : email,
      message : message,
    });
  });


  fdb.ref().on("child_added", function(childSnapshot) {
    var fsv = childSnapshot.val();

    var contactResponseText = (fsv.firstName + ", thank you for contacting us. You will hear from us soon.");
    $(".contact-info-text").text(contactResponseText);
  }),
    function(errorObject) {
      cl("The read failed: " + errorObject.code);

    }; 



});
    
    
    
