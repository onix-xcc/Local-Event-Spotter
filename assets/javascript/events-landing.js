$(document).ready(function () {
    var cl = console.log;

    //--- Date Formating for API ----------------------------//

    //---------Format for today's date---------------------//
    var today = new Date();
    var dateToday;
    function todayDate (){
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
        var yyyy = today.getFullYear();
        return dateToday = yyyy + '-'+ mm + '-'+ dd;
    };
    todayDate();
    cl(dateToday);

    //---------Format for the date in a week from today's date---------------------//
    var dateWeek;
    function addWeek(dt, n){
        // return new Date(dt.setDate(dt.getDate() + (n * 7)));    
        var dateWeekFromToday = new Date(dt.setDate(dt.getDate() + (n * 7)));  
        var dd = String(dateWeekFromToday.getDate()).padStart(2, '0');
        var mm = String(dateWeekFromToday.getMonth() + 1).padStart(2, '0'); //January is 0
        var yyyy = dateWeekFromToday.getFullYear();
        return dateWeek = yyyy + '-'+ mm + '-'+ dd; 
    }
    addWeek(today, 1);
    cl(dateWeek);


    function searchVideo(title){
        var youTubeKey = "AIzaSyA-5ieSYQ4v_f3Q_TYkLNt4GaKHcJSDU0E";
        var youTubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&maxResults=1&type=video&q="+ title+ "&key="+ youTubeKey;
        cl(youTubeURL);

        $.ajax({
            url: youTubeURL,
            method: "GET"
        }).then(function (response) {
            cl(response);
            var youTubeVideo = response.items.id.videoId;
            return youTubeVideo;
        });

    }
   
  
     //--- AJAX for Seatgeek API ----------------------------//
    var seatgeekTitle;
    function searchLocalEvents() {
        var endpoints = "events";
        var geoIP = "true";
        var imageQty = "6";
        var pages = "1";
        // var taxonomies1 = "sports";
        // var taxonomies2 = "concerts";
        var clientID = "MTU5MjQ0MjF8MTU1MzYxMDUzNy40NA";
        var clientSecret = "6cfce119a9b2af18cf96f74d56c6d8882bc46fa2a87d6db80ff260527ea0523e";
     
        var seatgeekURL = "https://api.seatgeek.com/2/"+ endpoints +"?geoip="+ geoIP + "&datetime_utc.gte="+ dateToday + "&datetime_utc.lte="+ dateWeek +"&per_page="+ imageQty +"&page="+ pages +"&client_id="+ clientID +"&client_secret="+ clientSecret;
        cl(seatgeekURL);

        $.ajax({
            url: seatgeekURL,
            method: "GET"
        }).then(function (response) {
            cl(response);

        //--- API Home Page Images ----------------------------------------------------//
            var data = response.events;
           
            for (var i = 0; i < data.length; i++) {
                seatgeekTitle = data[i].title;
                var imgCol = $('<div class="col s12 m4">');
                var card = $('<div class="card">');

                var cardImg = $('<div class="card-image">')
                cardImg.append($('<img src="'+ data[i].performers[0].image +'" alt="'+ data[i].taxonomies[0].name + ' image">'));
                card.append(cardImg);

                var cardText = $('<div class="card-content">')
                cardText.append($('<a class="card-title" href="https://www.youtube.com/watch?v='+ searchVideo(seatgeekTitle) + '">'+ seatgeekTitle +'<a>'));
                card.append(cardText);

                var cardLink = $('<div class="card-action">')
                cardLink.append($('<a href="'+ data[i].url +'">Tickets</a>'));
                card.append(cardLink);

                imgCol.append(card);
                $('.img-API').append(imgCol);
            }
        });
    };
    searchLocalEvents();
    

});
   // https://api.seatgeek.com/2/events?geoip=true&client_id=MTU5MjQ0MjF8MTU1MzYxMDUzNy40NA&client_secret=6cfce119a9b2af18cf96f74d56c6d8882bc46fa2a87d6db80ff260527ea0523e
