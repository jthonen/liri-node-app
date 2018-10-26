var fs = require("fs");

// Require dotenv for API keys... 
require("dotenv").config();

//Let's user know what commands are before anything happens... 
console.log("Options: concert-this | spotify-this-song | movie-this | do-what-it-says");
var command = parseInt(process.argv[3]);

// Switch statement to control what function gets run and when...
switch (command) {
    case ("concert-this"):
        //run function callback bands in town
        bandsintownq();
        console.log("Running Concert Query>>>");
        break;
    case ("spotify-this-song"):
        //run function callback spotify
        spotifyq();
        console.log("Running Spotify Query>>>");
        break;
    case ("movie-this"):
        //run funciton callback omdb
        omdbq();
        console.log("Running OMDB Query>>>");
        break;
    case ("do-what-it-says"):
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
    var input = command[4]
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
    var spotify = new spotify(keys.spotify);
    
    // spotify api query 
    // Make sure to respond with the following.
    // * Artist(s)
    // * The song's nams
    // * A preview link of the song from Spotify
    // * The album that the song is from
    var input = command[4]
    var queryurl = ""
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
    var input = command[4]

};

function dothething() {
    // do the thing function defined
    //

    var input = command[4]
}