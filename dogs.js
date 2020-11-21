module.exports = function () {
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');

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
                res.render('dog/dogs', context);
        }
    });

    // ***Search function*** //
    function searchDogs(req, res, context, mysql, complete) {
        var query = "SELECT * FROM cs340_friesemi.Dogs WHERE name = " + mysql.pool.escape(req.params.dogName);

        mysql.pool.query(query, function (err, results) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            context.foundDogs = results;
            complete();
        });
    }

    router.get("/search_dog/:dogName", function (req, res) {
        var mysql = req.app.get('mysql');
        var context = {};

        searchDogs(req, res, context, mysql, complete);
        function complete() {
            res.render("dog/search_dog", context);
        }
    });

    return router;
}();