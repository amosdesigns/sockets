/**
 * Created by Jerome on 8/31/16.
 */
var moment = require('moment'),
    NOW = moment();
console.log(NOW.format());

console.log(NOW.format('MMM.Do YYYY, h:mm:ssA')); // Oct  5th 2016, 5:45 pm
