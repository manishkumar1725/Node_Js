var fs = require("fs");

var writeStream = fs.createWriteStream("Write_A_File.txt");
writeStream.write("Hello Everyone... ");
writeStream.write("Write Whatever You Want..");
writeStream.end();