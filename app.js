// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function buildTable(data) {
	
	tbody.html("");

	
	data.forEach(dataRow => {
		
		var row = tbody.append("tr");

		
		Object.values(dataRow).forEach(val => {
			var cell = row.append("td");
			cell.text(val);
		});
	});
}


var button = d3.select("#filter-btn")


button.on("click", handleClick)

function handleClick() {
	
	d3.event.preventDefault();

	
	var date = d3.select("#datetime").property("value");
	var filteredData = tableData;

	console.log(date);

	
	if (date) {
		
		var filteredData = filteredData.filter(row => row.datetime === date);
	}

	buildTable(filteredData);
}


buildTable(tableData);