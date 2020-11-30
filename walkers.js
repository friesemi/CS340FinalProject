module.exports = function () {
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');

    // ***List Functions*** //
    function listWalkers(res, context, mysql, complete) {
        var query = "SELECT name, email, num_spots, dogId FROM cs340_friesemi.Dog_Walkers";
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

    // ***Update Dog Walker*** //
    router.post('/update_walker', function (req, res) {
        console.log("UPDATING DOG WALKER");
        console.log(req.body);

        var mysql = req.app.get('mysql');
        var sql = "UPDATE cs340_friesemi.Dog_Walkers SET email = ?, num_spots = ? WHERE name = ?";
        var inserts = [req.body.walkerEmail, req.body.numSpots, req.body.walkerName];

        sql = mysql.pool.query(sql, inserts, function (err) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            } else {
                res.redirect('/walkers/list_walkers');
            }
        });
    });

    // ***Add Dog Function*** //
    router.post('/add_dog', function (req, res) {

        console.log("ADDING DOG TO WALKER");
        console.log(req.body);

        var mysql = req.app.get('mysql');
        var sql = "UPDATE cs340_friesemi.Dog_Walkers SET dogId = (SELECT dogId FROM cs340_friesemi.Dogs WHERE name = ?) WHERE name = ?";

        var inserts = [req.body.dogName, req.body.walkerName];

        sql = mysql.pool.query(sql, inserts, function (err) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            } else {
                res.redirect('/walkers/list_walkers');
            }
        });
    });

    // ***Delete Function*** //
    function deleteWalker(req, res, mysql) {
        var query = "DELETE FROM cs340_friesemi.Dog_Walkers WHERE name = " + mysql.pool.escape(req.params.walkerName);

        sql = mysql.pool.query(query, function (err) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            } else {
                res.redirect('/walkers/list_walkers');
            }
        });
    }

    router.get("/delete_walker/:walkerName", function (req, res) {
        console.log("DELETING DOG WALKER");

        var mysql = req.app.get('mysql');
        deleteWalker(req, res, mysql);
    });

    return router;
}();
