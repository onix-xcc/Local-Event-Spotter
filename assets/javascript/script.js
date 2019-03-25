$(document).ready(function(){

  //----- Materialize features ---------------------//
  $('.sidenav').sidenav();
  $('.slider').slider();
  $('.materialboxed').materialbox();
});





    //--- AJAX --------------------------------------------------------------//
    // var topic = $(this).attr("data-name");
    // var imageCount = 10;
    // var userKey = "9he7lvkyjKSGNO2Kg1XR9B5enfXb9j5C"
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + userKey + "&limit=" + imageCount;

    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response) {
    //   console.log(queryURL);

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
  
   
