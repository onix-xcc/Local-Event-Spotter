$(document).ready(function (){


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
    $("#contact-info-text").text(contactResponseText);
  },
  function(errorObject) {
    cl("The read failed: " + errorObject.code);
  });  

  $(".modal-close").on("click", function() {
    $("form").trigger("reset");
  });
});
    

