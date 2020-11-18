var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var conn = mysql.createConnection({
    connectionLimit: 10,
    host: 'classmysql.engr.oregonstate.edu',
    user: 'cs340_friesemi',
    password: '4325',
    database: 'cs340_friesemi'
});

function listOwners(callback) {
    var query = "SELECT * FROM cs340_friesemi.Owners";

    conn.query(query, function (err, rows) {
        if (err)
            throw err;
        return callback(rows);
    });
}

listOwners(function (rows) {
    console.log(rows);
    return rows;
});

module.exports = router;
