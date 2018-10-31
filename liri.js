require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var request = require("request");
var moment = require("moment");
var fs = require("fs");
var request = require("request"); 
var spotify = new Spotify(keys.spotify);
// Require dotenv for API keys... 

//Let's user know what commands are before anything happens... 
//console.log("Options: concert-this | spotify-this-song | movie-this | do-what-it-says");
var command = process.argv[2];
var searchItem = process.argv[3];

// Switch statement to control what function gets run and when...
switch (command) {
    case "concert-this":
        //run function callback bands in town
        bandsintownq();
        console.log("Running Concert Query>>>");
        break;
    case "spotify-this-song":
        //run function callback spotify
        spotifyq();
        console.log("Running Spotify Query>>>");
        break;
    case "movie-this":
        //run funciton callback omdb
        omdbq();
        console.log("Running OMDB Query>>>");
        break;
    case "do-what-it-says":
        //run function callback ???
        dothething();
        console.log("I did the thing>>>");
        break;
    default:
    console.log("theres an error man");
};

function bandsintownq() {
    //bandsintown api query (when i get my key)
    // Make sure to respond with the following.
    //* Name of the venue
    //* Venue location
    //* Date of the Event (use moment to format this as "MM/DD/YYYY")
    var input = command[4];
    var queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
        
        request(queryURL), function(error, repsonse) {
            if (err) {
                return err;
            }
            else {
                var results = JSON.parse(response.body);
            }
        }
    
    var bandName = '';
    var venueLocal = '';
    var eventDate = '';

};

function spotifyq() {
    //export spotify key to keys.js
    
    // spotify api query 
    // Make sure to respond with the following.
    // * Artist(s)
    // * The song's nams
    // * A preview link of the song from Spotify
    // * The album that the song is from
    // var input = process.argv[3];
    // console.log(input);
    // if (input === undefined) {
    //     input = "The Sign";
    // };
    spotify.search({
        type: "track",
        query: "Hey Jude"
    },
    function(err, data) {
        if (err) {
            console.log("There is an error man, this is what it said: " + err);
            return;
        }

       console.log(data);

        // for (var i = 0; i<songs.length; i++) {
        //     console.log(i);
        //     console.log("artist")
        // }
    })
};

function omdbq() {
    // OMDB api query search
    // Make sure to respond with the following.
    // * Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.
    // if input from user is blank return info for "Mr.Nobody"
    

};

function dothething() {
    // do the thing function defined
    //

    var input = command[4]
}