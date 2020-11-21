module.exports = function () {
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');

    function listMeets(res, context, mysql, complete) {
        var query = "SELECT * FROM cs340_friesemi.Dog_Meets";
        mysql.pool.query(query, function (err, rows) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            context.meets = rows;
            complete();
        });
    }

    router.get("/list_meets", function (req, res) {
        var callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        listMeets(res, context, mysql, complete);
        function complete() {
            callbackCount++;
            if (callbackCount >= 1)
                res.render('meet/dog_meets', context);
        }
    });

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

    router.get("/list_dogs", function (req, res) {
        var callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        listDogs(res, context, mysql, complete);
        function complete() {
            callbackCount++;
            if (callbackCount >= 1)
                res.render('meet/dog_meets', context);
        }
    });

    // ***Search function*** //
    function searchMeets(req, res, context, mysql, complete) {
        var query = "SELECT * FROM cs340_friesemi.Dog_Meets WHERE name = " + mysql.pool.escape(req.params.dogMeets);

        mysql.pool.query(query, function (err, results) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            context.foundMeets = results;
            complete();
        });
    }

    router.get("/search_meet/:dogMeets", function (req, res) {
        var mysql = req.app.get('mysql');
        var context = {};

        searchMeets(req, res, context, mysql, complete);
        function complete() {
            res.render("meet/search_meet", context);
        }
    });

    return router;
}();