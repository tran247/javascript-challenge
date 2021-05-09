// from data.js
var tableData = data;

// YOUR CODE HERE!

// reference the table body 

var tbody = d3.select("tbody");

// console log the data from data.js

console.log(data);

// Loop through data and console log ea ufo sighting 

data.forEach(function(ufoSighting) {
    console.log(ufoSighting);


    // append one table row 'tr' for ea ufo sighting 

    var row =tbody.append("tr");

    // use 'Object.entries' to console. log ea sighting

    Object.defineProperties(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
    });
});


