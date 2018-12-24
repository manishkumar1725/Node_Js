var fs = require("fs");

function readData(err, data) {
	  console.log(data);
}

fs.readFile('Read_A_File.txt', 'utf8', readData);