module.exports = function () {
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');

    router.post('/create_dog', function(req, res){

        console.log("ADDING DOG");
        console.log(req.body);

        var callbackCount = 0;
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO cs340_friesemi.Dogs(name, breed, size) VALUES (?, ?, ?)";

        var inserts = [req.body.dog_name, req.body.dog_breed, req.body.dog_size];

        sql = mysql.pool.query(sql, inserts, function(err, results, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }else{
                res.redirect('/dogs/list_dogs');
            }
        });
    });

    router.post('/create_walker', function(req, res){

        console.log("ADDING WALKER");
        console.log(req.body);

        var callbackCount = 0;
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO cs340_friesemi.Dog_Walkers(name, email, num_spots) VALUES (?, ?, ?)";

        var inserts = [req.body.walker_name, req.body.walker_email, req.body.walker_num_spots];

        sql = mysql.pool.query(sql, inserts, function(err, results, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }else{
                res.redirect('/walkers/list_walkers');
            }
        });
    });

    router.post('/create_owner', function(req, res){

        console.log("ADDING OWNER");
        console.log(req.body);

        var callbackCount = 0;
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO cs340_friesemi.Owners(name, email, num_dogs) VALUES (?, ?, ?)";

        var inserts = [req.body.owner_name, req.body.owner_email, req.body.num_dogs];

        sql = mysql.pool.query(sql, inserts, function(err, results, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }else{
                res.redirect('/owners/list_owners');
            }
        });
    });

    router.post('/create_breeder', function(req, res){

        console.log("ADDING BREEDER");
        console.log(req.body);

        var callbackCount = 0;
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO cs340_friesemi.Breeders(name, email, specialized_breeds, has_dogs, dogs_avail) VALUES (?, ?, ?, ?, ?)";

        var inserts = [req.body.breeder_name, req.body.breeder_email, req.body.specialized_breeds, req.body.has_dogs, req.body.dogs_avail];

        sql = mysql.pool.query(sql, inserts, function(err, results, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }else{
                res.redirect('/breeders/list_breeders');
            }
        });
    });

    return router;
}();