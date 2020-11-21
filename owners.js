module.exports = function () {
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
            context.owners = rows;
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
            context.dogs = rows;
            complete();
        });
    }

    router.get("/list_owners", function (req, res) {
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["list_owners.js"];
        var mysql = req.app.get('mysql');
        listOwners(res, context, mysql, complete);
        function complete() {
            callbackCount++;
            if(callbackCount >= 1)
                res.render('owner/owners', context);
        }
    });

    router.get("/list_dogs", function (req, res) {
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["list_dogs.js"];
        var mysql = req.app.get('mysql');
        listDogs(res, context, mysql, complete);
        function complete() {
            callbackCount++;
            if(callbackCount >= 1)
                res.render('owner/owners', context);
        }
    });

    // ***Search function*** //
    function searchOwners(req, res, context, mysql, complete) {
        var query = "SELECT * FROM cs340_friesemi.Owners WHERE name = " + mysql.pool.escape(req.params.ownerName);

        mysql.pool.query(query, function (err, results) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            context.foundOwners = results;
            complete();
        });
    }

    router.get("/search_owner/:ownerName", function (req, res) {
        var mysql = req.app.get('mysql');
        var context = {};

        searchOwners(req, res, context, mysql, complete);
        function complete() {
            res.render("owner/search_owner", context);
        }
    });

    return router;
}();
