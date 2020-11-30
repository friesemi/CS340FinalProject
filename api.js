module.exports = function () {
    var express = require('express');
    var router = express.Router();
    var mysql = require('mysql');

    // ***Create Functions*** //
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

    router.post('/create_meet', function(req, res){

        console.log("ADDING MEET");
        console.log(req.body);

        var callbackCount = 0;
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO cs340_friesemi.Dog_Meets(name, email, rsvp, breed_specific, size_specific) VALUES (?, ?, ?, ?, ?)";

        var inserts = [req.body.meet_name, req.body.meet_email, req.body.rsvp, req.body.breed_specific, req.body.size_specific];

        sql = mysql.pool.query(sql, inserts, function(err, results, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }else{
                res.redirect('/dog_meets');
            }
        });
    });


    // ***Update Functions*** //

    router.post('/update_dog', function(req, res){

        console.log("UPDATING DOG");
        console.log(req.body);

        var callbackCount = 0;
        var mysql = req.app.get('mysql');
        var sql = "UPDATE cs340_friesemi.Dogs SET breed = ?, size = ? WHERE name = ?";

        var inserts = [req.body.dog_breed, req.body.dog_size, req.body.dog_name];

        sql = mysql.pool.query(sql, inserts, function(err, results, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }else{
                res.redirect('/dogs/list_dogs');
                res.end();
            }
        });
    });

    router.post('/update_breeder', function(req, res){

        console.log("UPDATING BREEDER");
        console.log(req.body);

        var callbackCount = 0;
        var mysql = req.app.get('mysql');
        var sql = "UPDATE cs340_friesemi.Breeders SET email = ?, specialized_breeds = ?, has_dogs = ?, dogs_avail = ? WHERE name = ?";

        var inserts = [req.body.breeder_email, req.body.specialized_breeds, req.body.has_dogs, req.body.avail_dogs, req.body.breeder_name];

        sql = mysql.pool.query(sql, inserts, function(err, results, fields){
            if(err){
                res.write(JSON.stringify(err));
                res.end();
            }else{
                res.redirect('/breeders/list_breeders');
                res.end();
            }
        });
    });

    return router;
}();