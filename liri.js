// Require dotenv for API keys... 
require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var request = require("request");
var moment = require("moment");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
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
        query: searchItem
    },
    function(err, data) {
        if (err) {
            console.log("There is an error man, this is what it said: " + err);
            return;
        }
        var songData = data.tracks.items;
        console.log(songData[0].name);

        for (var i = 0; i<3; i++) {
            // console.log(i+1);
            // console.log("Artist(s): " + songData[i].album);
            // console.log("Song Name: " + songData[i].name);
            // console.log("Listen for yourself: " + songData[i].album.external_urls_spotify);
            
        }
    })
};
 
function omdbq() {

    if (searchItem === undefined) {
        searchItem = "Mr Nobody";
    };

    var queryUrl = "http://www.omdbapi.com/?t=" + searchItem + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    request(queryUrl, function(error, response, body) {
        
        if (!error && response.statusCode === 200) {
            var parsedData = JSON.parse(body);
            //console.log(parsedData);

            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
            console.log("Title: " + parsedData.Title);
            console.log("Year: " + parsedData.Year);
            console.log("Rated: " + parsedData.Rated);
            console.log("IMDB Rating: " + parsedData.imdbRating);
            console.log("RT Rating: " + parsedData.Ratings[1].Value);
            console.log("Country: " + parsedData.Country);
            console.log("Language: " + parsedData.Language);
            console.log("Plot: " + parsedData.Plot);
            console.log("Actors: " + parsedData.Actors);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
            
}})};

function dothething() {

    fs.readFile("random.txt", "utf8", function(error, data) {
        console.log(data);

        var dataArr = data.split(',');

        if (dataArr === 2) {
            pick(dataArr[0], dataArr[1]);
        } else if (dataArr.Length === 1) {
            pick(dataArr[0]);
        };

    });};