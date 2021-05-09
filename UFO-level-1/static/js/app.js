// from data.js
var tableData = data;

// YOUR CODE HERE!

// reference the table body 

var tbody = d3.select("tbody");

// console log the data from data.js

// console.log(data);

// Loop through data and console log ea ufo sighting 

data.forEach(function(ufoSighting) {


    // append one table row 'tr' for ea ufo sighting 

    var row = tbody.append("tr");

    // use 'Object.entries' to console. log ea sighting

    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
  
        // append cell to the row for ea value 
        var cell = row.append("td");
        cell.text(value);
    });
});



// Button reference with id 'filter-btn'

var button = d3.select("#filter-btn");

// button click function 

button.on("click", function() {
    d3.event.preventDefault();
    tbody.html("");
    var datetimeInput = d3.select("datetime");
    var inputvalue = datetimeInput.property("value");
    var filterdata = data.filter(tbody => tbody.datetime === inputvalue);

    if (inputvalue === "") {
        data.forEach(createTable);
    }
    else {
        filterdata.forEach(createTable);
    }

});