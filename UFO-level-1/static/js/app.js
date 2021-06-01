// from data.js
var tableData = data;

// Using UFO data

var tbody = d3.select("tbody");

// view table 

data.forEach((ufo_info) => {
    var row = tbody.append("tr");
    Object.entries(ufo_info).forEach(([Key,value]) => {
       var cell = row.append("td");
       cell.text(value);
    });
});

// Select button
var button = d3.select("#filter-btn");

//select form 
var form = d3.select("#form");

//create handlers
button.on("click",runEnter);

// complete function for form

function runEnter(){
    // stop page from refreshing 
    d3.event.preventDefault();

    //select input element 
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);
    var filteredData = data.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);
    // remove from list

    tbody.html("");

    // view table 
    filteredData.forEach((ufo_info) => {
        var row = tbody.append("tr");
        Object.entries(ufo_info).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};