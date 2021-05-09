// from data.js
var tableData = data;

// YOUR CODE HERE!

// reference the table body 

var tbody = d3.select("tbody");

// console log the data from data.js

console.log(data);

// Loop through data and console log ea weather report 

data.forEach(function(ufoSighting) {
    console.log(ufoSighting)
});