var express = require('express');
var router = express.Router();
var mysql = require('mysql');

function listOwners(res, context, mysql, complete) {
    var query = "SELECT * FROM cs340_friesemi.Owners";
    mysql.pool.query(query, function (err, rows) {
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
        }
        complete();
    });
}

function listDogs(res, context, mysql, complete) {
    var query = "SELECT * FROM cs340_friesemi.Dogs";
    mysql.pool.query(query, function (err, rows) {
        if (err) {
            res.write(JSON.stringify(err));
            res.end();
        }
        complete();
    });
}

router.get("/list_owners", function (req, res) {
    var callbackCount = 0;
    var context = {};
    context.jsscripts = ["list_owner.js"];
    var mysql = req.app.get('mysql');
    listOwners(res, context, mysql, complete);
    function complete() {
        callbackCount++;
        if(callbackCount >= 1)
            res.render('owners', context);
    }
});

router.get("/list_dogs", function (req, res) {
    var callbackCount = 0;
    var context = {};
    context.jsscripts = ["list_dogs.js"];
    var mysql = req.app.get('mysql');
    listOwners(res, context, mysql, complete);
    function complete() {
        callbackCount++;
        if(callbackCount >= 1)
            res.render('owners', context);
    }
});


