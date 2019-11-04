var fs = require('fs');

var data = require('./my-data.json');

console.log(data.name);

var data2 = fs.readFile("./my-data.json", "utf-8", (err, data)=>{



var tempData = JSON.parse(data);
console.log("After parse "+ tempData.email);
});




console.log("Done 1");
console.log("done 2");
var data3 = fs.readFile("./my-data.json", (err, data)=>{
console.log("Indide call back 2");

});

console.log("Almost done");
//data = fs.readdirSync('/home/tangente');
//console.log('data: ', data);
console.log("I am done");
