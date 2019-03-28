$(document).ready(function () {
    var cl = console.log;

    //--- AJAX for Seatgeek API --------------------------------------------------------------
    function searchLocalEvents(date, zipcode, miles) {

        var seatGeekURL = "https://api.seatgeek.com/2/events?geoip=" + zipcode + "&datetime_utc=" + date + "&range=" + miles + "mi&client_id=MTU4NDc5NTh8MTU1MzEzMDYzNy4zNA";

        $.ajax({
            url: seatGeekURL,
            method: "GET"
        }).then(function (response) {
            cl(seatGeekURL);
            cl(response);

            var data = response.events;

            for (var i = 0; i < data.length; i++) {
                // createRow(response[i]);
                var tRow = $("<tr>");

                // Methods run on jQuery selectors return the selector they we run on
                // This is why we can create and save a reference to a td in the same statement we update its text
                var eventNameTd = $("<td>").text(data[i].title);

                var eventTypeTd = $("<td>").text(data[i].type.charAt(0).toUpperCase() + (data[i].type).slice(1));

                var eventPerformers = $("<td>").text(data[i].performers[0].name);

                // The .substring extract only the time omitting the date
                var eventTimeTd = $("<td>").text(data[i].datetime_local.substring(11, 16));

                var eventTicketTd = $('<td><a href="' + data[i].url + '">Get tickets</a>');

                // Append the newly created table data to the table row
                tRow.append(eventNameTd, eventTypeTd, eventPerformers, eventTimeTd, eventTicketTd);

                // Append the TRow to the table body
                $(".events-table").append(tRow);
            }
        });
    };


    $("#go-btn").on("click", function (event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the date, zip code and mile range
        var inputDate = $(".datepicker").val().trim();
        cl(inputDate);
        var inputZip = $("#zip").val().trim();
        cl(inputZip);
        var inputMiles = parseInt($("#range").val().trim());
        cl(inputMiles);
        // Running the searchLocalEvents function (passing zip as an argument)
        searchLocalEvents(inputDate, inputZip, inputMiles);
    });

});