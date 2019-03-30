$(document).ready(function (){

  var cl = console.log

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  //  --- Firebase Database user key and initialization--------------------//
  var config = {
    apiKey: "AIzaSyB57NQ2m4VxhU4-b6LORPi4MPDeCC5POMU",
    authDomain: "smu-p1-g5.firebaseapp.com",
    databaseURL: "https://smu-p1-g5.firebaseio.com",
    projectId: "smu-p1-g5",
    storageBucket: "smu-p1-g5.appspot.com",
    messagingSenderId: "1039960867810"
  };
  cl(config. databaseURL);
  firebase.initializeApp(config);
  var fdb = firebase.database();

  //--- "Contact Us" form inputs are stored (pushed) into firebase database ---//

  var firstName = "";
  var lastName = "";
  var email = "";
  var message = "";

  $("#contact-form-submit").on("click", function(event) {
    event.preventDefault();
    formInput();
  });


  function formInput(){
    if ($("#input-first-name").val().trim() === "" || $("#input-last-name").val().trim() === "" || $("#input-email").val().trim() === ""|| $("#input-message").val().trim() === ""){
      $("#from-submit-text").text("Please fill in missing information above.");  
      return false;
    } 
      else {
        $("#from-submit-text").text(""); 

        firstName = $("#input-first-name").val().trim();
        lastName = $("#input-last-name").val().trim();
        email = $("#input-email").val().trim();
        message = $("#input-message").val().trim();

        fdb.ref("/contactFormsUnresolved").push({
          firstName : firstName,
          lastName : lastName,
          email : email,
          message : message,
          dateAdded : firebase.database.ServerValue.TIMESTAMP
        });

        //--- first name is pulled from firebase to be populated on form response message---//
        fdb.ref("/contactFormsUnresolved").on("child_added", function(childSnapshot) {
          var fsv = childSnapshot.val();
          var contactResponseText = (fsv.firstName + ", thank you for contacting us. You will hear from us soon.");
          $('.modal').modal(); 
          $("#contact-info-text").text(contactResponseText);
        },
          function(errorObject) {
            cl("The read failed: " + errorObject.code);
          });  

        // to clear form and response message on submit --------------//
        $(".modal-close").on("click", function() {
          $("form").trigger("reset");
        });
      }
    }

 

   //--- Firebase for "email sign-up" ---stores email data for future newsletter emails------//
 
  var email2 ="";

  $(document).on('click', '#submit-email', function(){
      event.preventDefault();
    if ($("#input-email").val().trim() !== "" &&  validateEmail(email) ){
      email2 = $("#email-sign-up").val().trim();
      fdb.ref("/newsletterSignUp").push({
        email : email2,
        dateAdded : firebase.database.ServerValue.TIMESTAMP
      });
    }
      else{
        $("#from-email-text").text("Please fill in missing information above.");
      }
    });


});
    

