$(document).ready(function () {
            var cl = console.log;

            // CreateRow function that takes the returned data by the API and appends it to the tbody

            var createRow = function (response) {
                cl(response);
                var tRow = $("<tr>");

                // Methods run on jQuery selectors return the selector they we run on
                // This is why we can create and save a reference to a td in the same statement we update its text
                var eventNameTd = $("<td>").text(response.events.title);
                var eventTypeTd = $("<td>").text(response.events.type);
                var eventDateTd = $("<td>").text(response.events.datetime_local);
                var eventArtistTeam = $("<td>").text(response.events.performers.name[i]);

                // Append the newly created table data to the table row
                tRow.append(eventNameTd, eventTypeTd, eventDateTd, eventArtistTeam);

                // Append the TRow to the table body
                $(".events-table").append(tRow);


            };


            function searchLocalEvents(inputZip) {
                //--- AJAX for Seatgeek API --------------------------------------------------------------
                // Add an event listener to Zip Code variable, limit it to mile range
                // var zipCode = 75211;
                //Add an event listener for the drop-down radius of the miles
                // var mileRange = "10mi";
                // var queryURL = "https://api.seatgeek.com/2/events?geoip=" + zipCode + "&range=" + mileRange + "&client_id=MTU4NDc5NTh8MTU1MzEzMDYzNy4zNA";
                var queryURL = "https://api.seatgeek.com/2/events?geoip=" + inputZip + "&range=10mi&client_id=MTU4NDc5NTh8MTU1MzEzMDYzNy4zNA";

                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    cl(queryURL);
                    cl(response);
                    for (var i = 0; i < response.length; i++) {
                        createRow(response[i]);
                    }
                });
            };

            //--- API Home Page Images --------------------------------------------------------------//
            function createImage(data) {
                var imgCol = $('<div class="col s12 m4"></div>');
                var imgBlock = $('<div class="icon-block"></div>');
                imgBlock.append($('<img class="materialboxed" src="' + data.events.performers[0] + '">'));
                imgBlock.append($('<p class="img-text">' + data.events.title + '</p>'));
                imgCol.append(imgBlock);
                $('.img-API').append(imgCol);
            };
        };

        $("#go-btn").on("click", function (event) {
            // Preventing the button from trying to submit the form
            event.preventDefault();
            // Storing the zip code
            var inputZip = $("#zip").val().trim();
            var inputMiles = parseInt($("#range").val().trim());
            // Running the searchLocalEvents function (passing zip as an argument)
            searchLocalEvents(inputZip, inputMiles);

        });