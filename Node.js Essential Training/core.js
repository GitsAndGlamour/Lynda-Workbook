var path = require('path'); //Core Module
var util = require('util'); //Utility Module
var v8   = require('v8');   //Memory Module

var dirUploads = path.join(__dirname, 'C:/', 'Users', 'OmieW');
util.log(dirUploads);

console.log(path.basename(__filename) );
   util.log(v8.getHeapStatistics());
