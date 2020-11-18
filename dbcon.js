var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_friesemi',
    password        : '4325',
    database        : 'cs340_friesemi'
});
module.exports.pool = pool;
