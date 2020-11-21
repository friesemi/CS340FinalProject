module.exports = function () {
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');

    function listWalkers(res, context, mysql, complete) {
        var query = "SELECT * FROM cs340_friesemi.Dog_Walkers";
        mysql.pool.query(query, function (err, rows) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            context.walkers = rows;
            complete();
        });
    }

    router.get("/list_walkers", function (req, res) {
        var callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        listWalkers(res, context, mysql, complete);
        function complete() {
            callbackCount++;
            if (callbackCount >= 1)
                res.render('walker/walkers', context);
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
                res.render('walker/walkers', context);
        }
    });

    // ***Search function*** //
    function searchWalkers(req, res, context, mysql, complete) {
        var query = "SELECT * FROM cs340_friesemi.Dog_Walkers WHERE name = " + mysql.pool.escape(req.params.walkerName);

        mysql.pool.query(query, function (err, results) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            context.foundWalkers = results;
            complete();
        });
    }

    router.get("/search_walker/:walkerName", function (req, res) {
        var mysql = req.app.get('mysql');
        var context = {};

        searchWalkers(req, res, context, mysql, complete);
        function complete() {
            res.render("walker/search_walker", context);
        }
    });

    return router;
}();