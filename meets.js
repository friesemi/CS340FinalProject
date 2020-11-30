module.exports = function () {
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');

    // ***List Functions*** //
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

    // ***Update Function*** //
    router.post('/update_meet/', function (req, res) {
        console.log("UPDATING DOG MEET");
        console.log(req.body);

        var mysql = req.app.get('mysql');
        var sql = "UPDATE cs340_friesemi.Dog_Meets SET email = ?, breed_specific = ?, rsvp = ?, size_specific = ? WHERE name = ?";
        var inserts = [req.body.meetEmail, req.body.breedSpecific, req.body.meetRSVP, req.body.sizeSpecific, req.body.meetName];

        sql = mysql.pool.query(sql, inserts, function (err) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            } else {
                res.redirect('/dog_meets/list_meets');
            }
        });
    });

    // ***Add Dog Function*** //
    router.post('/add_dog', function (req, res) {

        console.log("ADDING DOG TO DOG MEET");
        console.log(req.body);

        var callbackCount = 0;
        var mysql = req.app.get('mysql');
        var sql = "UPDATE cs340_friesemi.Dog_Meets SET dogId = (SELECT dogId FROM cs340_friesemi.Dogs WHERE name = ?) WHERE name = ?";

        var inserts = [req.body.dogName, req.body.meetName];

        sql = mysql.pool.query(sql, inserts, function (err, results, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            } else {
                res.redirect('/dog_meets/list_meets');
            }
        });
    });

    // ***Delete Function*** //
    function deleteMeet(req, res, mysql) {
        var query = "DELETE FROM cs340_friesemi.Dog_Meets WHERE name = " + mysql.pool.escape(req.params.meetName);

        sql = mysql.pool.query(query, function (err) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            } else {
                res.redirect('/dog_meets/list_meets');
            }
        });
    }

    router.get("/delete_meet/:meetName", function (req, res) {
        console.log("DELETING DOG MEET");

        var mysql = req.app.get('mysql');
        deleteMeet(req, res, mysql);
    });

    return router;
}();