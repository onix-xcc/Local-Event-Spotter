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
    
    
    
    // Shane Gove
   
  
     // The createRow function takes data returned by OMDB and appends the table data to the tbody
     var createRow = function(response) {
      console.log(response);
        // Create a new table row element
        var tRow = $("<tr>");
  
        // Methods run on jQuery selectors return the selector they we run on
        // This is why we can create and save a reference to a td in the same statement we update its text
        var titleTd = $("<td>").text(response.title);
        var ratingTd = $("<td>").text(response.ratings[0].code);
  var showTimeLoopLength = 0;
  if (response.showtimes.length >= 10){
    showTimeLoopLength=10;
  }
  else {
    showTimeLoopLength=response.showtimes.length;
  }
  
  var showTimeText=""
  for(var i=0; i<showTimeLoopLength; i++){
    showTimeText=showTimeText+ " " + response.showtimes[i].dateTime
  }
  
        var showtimesTd = $("<td>").text(showTimeText);
          
        // Append the newly created table data to the table row
        tRow.append(titleTd, ratingTd, showtimesTd);
        // Append the table row to the table body
        $(".movie-table").append(tRow);
      };
  
       function searchMoviesInTown(zipcode) {
        var queryURL = "http://data.tmsapi.com/v1.1/movies/showings?startDate=2019-03-23&zip=" + zipcode + "&radius=10&imageSize=Md&api_key=j7ukwvbq74h5d9t7acars4em";
         $.ajax({
           url: queryURL,
           method: "GET"
         }).then(function(response) {
          console.log(response);
          for(var i=0; i<response.length; i++){
             createRow(response[i]);
          }
          
       
         });
      };
  
  
      $("#select-artist").on("click", function(event) {
      // Preventing the button from trying to submit the form
      event.preventDefault();
      // Storing the artist name
      var inputArtist = $("#zip").val().trim();
  
      // Running the searchBandsInTown function(passing in the artist as an argument)
      searchMoviesInTown(inputArtist);
    });
  
  //   $('#txtSearchProdAssign').keypress(function (e) {
  //  var key = e.which;
  //  if(key == 13)  // the enter key code
  //   {
  //     $('input[name = butAssignProd]').click();
  //     return false;  
  //   }
  // }); 
  
