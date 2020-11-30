module.exports = function () {
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');

    // ***List Function*** //
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

    // ***Add Dog to Owner function
    router.post('/add_dog', function (req, res) {

        console.log("ADDING DOG TO OWNER");
        console.log(req.body);

        var mysql = req.app.get('mysql');
        var sql = "UPDATE cs340_friesemi.Owners SET dogId = (SELECT dogId FROM cs340_friesemi.Dogs WHERE name = ?) WHERE name = ?";

        var inserts = [req.body.dogName, req.body.ownerName];

        sql = mysql.pool.query(sql, inserts, function (err, results, fields) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            } else {
                res.redirect('/owners/list_owners');
            }
        });
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

    // ***Delete Function*** //
    function deleteDog(req, res, mysql) {
        var query = "DELETE FROM cs340_friesemi.Dogs WHERE name = " + mysql.pool.escape(req.params.dogName);

        sql = mysql.pool.query(query, function (err) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            } else {
                res.redirect('/dogs/list_dogs');
            }
        });
    }

    router.get("/delete_dog/:dogName", function (req, res) {
        console.log("DELETING DOG");

        var mysql = req.app.get('mysql');
        deleteDog(req, res, mysql);
    });

    return router;
}();
