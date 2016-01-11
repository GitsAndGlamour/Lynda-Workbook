var hello = "hello Node!"
console.log(__dirname);
var path = require('path');
console.log(`Rock on World from ${path.basename(__filename)}!`);
console.log(process.argv);

function grab(flag) {
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}
//This is way to get info into the app when we start it
//Great for specifying certain ports or file folders at the beginning
var greeting = grab('--greeting');
var user = grab('--user');
 if(!user || !greeting) {
     console.log ("You blew it!");
 } else {
     console.log(`Welcome ${user}, ${greeting}`);
 }
