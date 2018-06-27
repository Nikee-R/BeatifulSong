$(document).ready(function() {
    
        // ===================================== Firebase ===================================== 
        <script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCASV3iojfjEk-NCtqWP9PbNaHKRfAesKs",
            authDomain: "beautifulsong-c6435.firebaseapp.com",
            databaseURL: "https://beautifulsong-c6435.firebaseio.com",
            projectId: "beautifulsong-c6435",
            storageBucket: "",
            messagingSenderId: "976668913602"
        };

        firebase.initializeApp(config);
        
        // Variable that recognizes the database.
        var database = firebase.database();

            var q = "";
        
            var videoId = "";
        
            var artistName = "";
        
            var trackName = "";
        
            //create play-list
        
            //search function will take whatever the user typy in 
            $("#searchButton").on("click", function(){
                //prevents the submit button from trying to submit a form when clicked
                event.preventDefault();
                //a var to hold what user type in
                var q = $("#userInput").val().trim().toLowerCase();
        
                //if user do not type in any word, then show the alert
                if ( q == "") {
                  alert("you did not type any word in!")
                } else {
                      //search the song of userInput
                      userSearch = userInput ;}
        
                  //youTuBe API key
                var youTuBeApiKey = "AIzaSyCJ4ygjtnrG-r3EoZ3jiR5ssYiFN_JahCQ" ;
        
                 // Constructing a queryURL using the API
                var queryURL = 	"https://www.googleapis.com/youtube/v3/search?" +
                                "&part=snippet" +
                                "&type=video" +
                                "&q=" + q +
                                "&maxResults=5" +
                                "&videoCategoryId=10" +
                                "&key=" + youTuBeApiKey;
                    
                // ===================================== AJAX call ===================================== 
                $.ajax({
                  url: queryURL,
                  method: "GET"
                }).then (function (response){
                    console.log(response);
                    videoId = response.items[0].id.videoId
                    var ur l= "https://www.youtube.com/embed/" + videoId;
                    console.log(url);	
        
                // ===================================== Changes the song based on user-input to search. ===================================== 
                videojs('preview-player').ready(function() {
                    var myPlayer = this;
                    myPlayer.src({ type: 'video/youtube', src: url });
                    });
                    
                    var str = response.items[0].snippet.title;
                    var res = str.split("-");
        
                    console.log(str);
                    console.log(res);
        
                    artistName = res[0];
                    trackName = res[1];
        
                    console.log(artistName);
                    console.log(trackName);
        
                }); 							
        
            });		
        
        });	
        // ===================================== Playlist Functions ===================================== 
        function initialPlaylist() {
            var playlistArtist = $('#artist-name').val('');
            var playlistAlbum = $('#album-name').val('');
            var playlistSong = $('#song-name').val('');
         }

        // Variable containing an empty array for the playlist.
        var playlist = [];

        // Adds songs to playlist  
        function newSong() {
            for (i = 0; i < playlist.length; i++) {
                $('.table > tbody').append(
                    '<tr>' +
                        '<td>' + playlist [i].playlistArtist + '</td>' +
                        '<td>' + playlist [i].playlistAlbum + '<td>' +
                        '<td>' + playlist [i].playlistSong + '</td>' +
                    '</tr>'
                );
            }
        }
        
        // Toggles play and pause when song is clicked 
        var audio = document.getElementById('song');
        var active = false;

        function toggle() {
            if (active) {
                audio.pause()
                        } else {
                audio.play();
            }
        };

        audio.onplaying = function() {
            active = true;
        };

        audio.onpause = function() {
            active = false;
        };


