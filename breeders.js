module.exports = function () {
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');

    function listBreeders(res, context, mysql, complete) {
        var query = "SELECT * FROM cs340_friesemi.Breeders";
        mysql.pool.query(query, function (err, rows) {
            if (err) {
                res.write(JSON.stringify(err));
                res.end();
            }
            context.breeders = rows;
            complete();
        });
    }

    router.get("/list_breeders", function (req, res) {
        var callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        listBreeders(res, context, mysql, complete);
        function complete() {
            callbackCount++;
            if (callbackCount >= 1)
                res.render('breeder/breeders', context);
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
                res.render('breeder/breeders', context);
        }
    });

    return router;
}();
