// Require dotenv for API keys... 
require("dotenv").config();

//Let's user know what commands are before anything happens... 
console.log("Options: concert-this | spotify-this-song | movie-this | do-what-it-says");
var spotify = new spotify(keys.spotify);
var input = process.argv;

// Switch statement to control what function gets run and when...
switch (true) {
    case (input === "concert-this"):
        //run function callback bands in town
        console.log("Running Concert Query>>>");
    case (input === " spotify-this-song"):
        //run function callback spotify
        console.log("Running Spotify Query>>>");
    case (input === "movie-this"):
        //run funciton callback omdb
        console.log("Running OMDB Query>>>");
    case (input === "do-what-it-says"):
        //run function callback ???
        console.log("I did the thing>>>");
}

