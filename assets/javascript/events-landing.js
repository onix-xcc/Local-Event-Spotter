$(document).ready(function () {

    //---------------APIs------------------------------------//
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

    //---------One week from today date and format---------------------//
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

 
    // --- AJAX for Seatgeek Event API --- using IP address for user location and one week period for searches--------// 
    var seatgeekTitle;
    function searchLocalEvents() {
        var endpoints = "events";
        var geoIP = "true"; 
        var imageQty = "6";
        var pages = "1";
        var clientID = "MTU5MjQ0MjF8MTU1MzYxMDUzNy40NA";
        var clientSecret = "6cfce119a9b2af18cf96f74d56c6d8882bc46fa2a87d6db80ff260527ea0523e";
        var seatgeekURL = "https://api.seatgeek.com/2/"+ endpoints +"?geoip="+ geoIP + "&datetime_utc.gte="+ dateToday + "&datetime_utc.lte="+ dateWeek +"&per_page="+ imageQty +"&page="+ pages +"&client_id="+ clientID +"&client_secret="+ clientSecret;
        cl(seatgeekURL);

        $.ajax({
            url: seatgeekURL,
            method: "GET"
        }).then(function (response) {
            cl(response);

        //--- Home page images, title and ticket links ---input into cards--------------//
            var data = response.events;
            
            for (var i = 0; i < data.length; i++) {
            
                var imgCol = $('<div class="col s12 m6 l4">');
                var card = $('<div class="card small">');

                var cardImg = $('<div class="card-image">');
                var cardImage = data[i].performers[0].image || "assets/images/logo-placeholder.png";
                cardImg.append($('<img src="'+ cardImage +'" alt="'+ data[i].taxonomies[0].name + ' image">'));
                card.append(cardImg);

                var cardText = $('<div class="card-content">');
                cardText.append($('<a class="card-text">'+ data[i].title +'<a>'));
                card.append(cardText);

                var cardLink = $('<div class="card-action">')
                cardLink.append($('<a class= "left" href="'+ data[i].url +'">Tickets</a>'));
                
                card.append(cardLink);

                imgCol.append(card);
                $('.img-API').append(imgCol);
            }
        });
    };
    searchLocalEvents();
   
});

    //---future features that need be edited and tested ---- released in next version"


    // //-- AJAX for YouTube Video API -------------------------------------------//
    // var youTubeVideo;
    // function searchVideo(title){
    //     var youTubeKey = "AIzaSyDVZZPd8RpksBIM8BWtPobs4AIR8R2Cm8w";
    //     var youTubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&maxResults=1&type=video&q="+ title+ "&key="+ youTubeKey;
    //     cl(youTubeURL);

    //     $.ajax({
    //         url: youTubeURL,
    //         method: "GET"
    //     }).then(function (response) {
    //         youTubeVideo = response.items[0] ? 'https://www.youtube.com/watch?v=' + response.items[0].id.videoId  : "https://www.youtube.com/";
    //        return ('"href='+ youTubeVideo +'"');
    //     });
    // }
    // var seatgeekTitle = data[i].title;
    // cardLink.append($('<a class= "right youTube-btn"><img src="assets/images/YouTube-logo.png"></a>'));

    // $(document).on('click', '.youTube-btn', function(){
    //     searchLocalEvents(seatgeekTitle);
    //     $("youTube-btn").attr(youTubeVideo);
    // });
 
