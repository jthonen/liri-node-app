require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var request = require("request");
var moment = require("moment");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var searchItem = process.argv[3];

switch (command) {
    case "concert-this":
        bandsintownq();
        console.log("Running Concert Query>>>");
        break;
    case "spotify-this-song":
        spotifyq();
        console.log("Running Spotify Query>>>");
        break;
    case "movie-this":
        omdbq();
        console.log("Running OMDB Query>>>");
        break;
    case "do-what-it-says":
        dothething();
        console.log("I did the thing>>>");
        break;
    default:
    console.log("theres an error man");
};

function bandsintownq() {
  
    var queryURL = "https://rest.bandsintown.com/artists/" + searchItem + "/events?app_id=codingbootcamp";
        
        request(queryURL, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                var parsedData = JSON.parse(body);

                if (!parsedData.length) {
                    console.log("nada for " + searchItem);
                };

                console.log("Concerts for: " + searchItem);

                for (var i = 0; i < parsedData.length; i++) {
                    var show = parsedData[i];
                    var dateProper = moment(show.datetime).format("MM/DD/YYYY");
                    
                    console.log(">>>>>>>>>>>>><<<<<<<<<<<<<<<<");
                    console.log("Venue: " + show.venue.name);
                    console.log("City: " + show.venue.city);
                    console.log("Country: " + show.venue.country);
                    console.log("Date: " + dateProper);
                    console.log(">>>>>>>>>>>>><<<<<<<<<<<<<<<<");
                    console.log(" ");

}};});};

function spotifyq() {

    if (searchItem === undefined) {
        searchItem = "The Sign";
    };
    spotify.search({
        type: "track",
        query: searchItem
    },
    function(err, data) {

        if (err) {
            console.log("There is an error man, this is what it said: " + err);
            return;
        };

        var songData = data.tracks.items;

        for (var i = 0; i<1; i++) {

            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
            // console.log(i+1);
            console.log("Artist(s): " + songData[i].album.artists[0].name);
            console.log("Song Name: " + songData[i].name);
            console.log("Listen for yourself: " + songData[i].album.external_urls.spotify);
            console.log("Album Name: " + songData[i].album.name);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
            
}})};
 
function omdbq() {

    if (searchItem === undefined) {
        searchItem = "Mr Nobody";
    };

    var queryUrl = "http://www.omdbapi.com/?t=" + searchItem + "&y=&plot=full&tomatoes=true&apikey=trilogy";

    request(queryUrl, function(error, response, body) {
        
        if (!error && response.statusCode === 200) {
            var parsedData = JSON.parse(body);

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

        var dataArray = data.split(',');

        if (dataArray === 2) {
            pick(dataArr[0], dataArray[1]);
        } else if (dataArray.Length === 1) {
            pick(dataArray[0]);
        };

});};