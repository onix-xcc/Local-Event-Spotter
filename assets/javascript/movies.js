$(document).ready(function () {

    // The createRow function takes data returned by the API and appends the table data to the tbody
    var createRow = function (response) {
        console.log(response);
        // Create a new table row element
        var tRow = $("<tr>");
        var titleTd = $("<td>").text(response.title);
        var ratingTd = $("<td>").text(response.ratings[0].code);


        var showTimeLoopLength = 0;
        if (response.showtimes.length >= 5) {
            showTimeLoopLength = 5;
        }
        else {
            showTimeLoopLength = response.showtimes.length;
        }


        var showTimeText = ""
        for (var i = 0; i < showTimeLoopLength; i++) {
            var showTimeResponse = response.showtimes[i].dateTime
            showTimeText = showTimeText + moment(showTimeResponse, moment.ISO_8601).format("hh:mm a") + " " + " @ " + response.showtimes[i].theatre.name + "<br>"
        }
        console.log(showTimeResponse)

        var showtimesTd = $("<td id='time'>").html(showTimeText);
        console.log(showTimeText)

        // Append the newly created table data to the table row
        tRow.append(titleTd, ratingTd);
        tRow.append(showtimesTd);
        // Append the table row to the table body
        $(".movie-table").append(tRow);
    };

    function searchMoviesInTown(date, zipcode, miles) {
        var queryURL = "http://data.tmsapi.com/v1.1/movies/showings?startDate=" + date + "&zip=" + zipcode + "&radius=" + miles + "&imageSize=Md&api_key=j7ukwvbq74h5d9t7acars4em";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.length; i++) {
                createRow(response[i]);
            }
        });
    };


    $("#go-btn").on("click", function (event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();

        // Storing the date, zip code, and radius
        var inputDate = $(".datepicker").val().trim();
        var inputZip = $("#zip").val().trim();
        var inputMiles = parseInt($("#range").val().trim());
        // Running the searchMoviesInTown function(passing in the date, zip, and miles as an argument)
        searchMoviesInTown(inputDate, inputZip, inputMiles);
    });

});

