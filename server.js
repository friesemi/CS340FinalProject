/*
 * Server side JS controlling page redirect and request queries
 *
 */

var express = require('express');
var path = require('path');
var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');
var app = express();
var port = 3008;

var handlebars = require('express-handlebars').create({
	defaultLayout: 'main',
	});

app.engine('handlebars', handlebars.engine);
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('public'));
app.set('view engine', 'handlebars');
app.set('mysql', mysql);
app.set('port', port);

app.use('/dogs', require('./dogs.js'));
app.use('/api', require('./api.js'));
app.use('/owners', require('./owners.js'));
app.use('/breeders', require('./breeders.js'));
app.use('/walkers', require('./walkers.js'));
app.use('/dog_meets', require('./meets.js'));
app.use('/', express.static('public'));


app.get('/', (req, res) => {
	res.status(200).render('index');
})

app.get('/index', (req, res) => {
	res.status(200).render('index');
})

app.get('/dog_meets', (req, res) => {
	res.status(200).render('meet/dog_meets');
})

app.get('/create_meet', (req, res) => {
	res.status(200).render('meet/create_meet');
})

app.get('/dog_meets/delete_meet', (req, res) => {
	res.status(200).render('meet/delete_meet');
})

app.get('/dog_meets/search_meet', (req, res) => {
	res.status(200).render('meet/search_meet');
})

app.get('/update_meet', (req, res) => {
	res.status(200).render('meet/update_meet');
})

app.get('/add_meet', (req, res) => {
	res.status(200).render('meet/add_meet');
})

app.get('/owners', (req, res) => {
	res.status(200).render('owner/owners');
})

app.get('/create_owner', (req, res) => {
	res.status(200).render('owner/create_owner');
})

app.get('/owners/search_owner', (req, res) => {
	res.status(200).render('owner/search_owner');
})

app.get('/update_owner', (req, res) => {
	res.status(200).render('owner/update_owner');
})

app.get('/add_dog', (req, res) => {
	res.status(200).render('dog/add_dog');
})

app.get('/owners/delete_owner', (req, res) => {
	res.status(200).render('owner/delete_owner');
})

app.get('/breeders', (req, res) => {
	res.status(200).render('breeder/breeders');
})

app.get('/create_breeder', (req, res) => {
	res.status(200).render('breeder/create_breeder');
})

app.get('/breeders/delete_breeder', (req, res) => {
	res.status(200).render('breeder/delete_breeder');
})

app.get('/breeders/search_for_breeder', (req, res) => {
	res.status(200).render('breeder/search_for_breeder');
})

app.get('/update_breeder', (req, res) => {
	res.status(200).render('breeder/update_breeder');
})

app.get('/style.css', (req, res) => {
	res.status(200).render('/public/css/style.css');
})

app.get('/dogs', (req, res) => {
	res.status(200).render('dog/dogs');
})

app.get('/create_dog', (req, res) => {
	res.status(200).render('dog/create_dog');
})

app.get('/dogs/delete_dog', (req, res) => {
	res.status(200).render('dog/delete_dog');
})

app.get('/dogs/search_dog', (req, res) => {
	res.status(200).render('dog/search_dog');
})

app.get('/update_dog', (req, res) => {
	res.status(200).render('dog/update_dog');
})

app.get('/walkers', (req, res) => {
	res.status(200).render('walker/walkers');
})

app.get('/create_walker', (req, res) => {
	res.status(200).render('walker/create_walker');
})

app.get('/update_walker', (req, res) => {
	res.status(200).render('walker/update_walker');
})

app.get('/add_walker', (req, res) => {
	res.status(200).render('walker/add_walker');
})

app.get('/walkers/delete_walker', (req, res) => {
	res.status(200).render('walker/delete_walker');
})

app.get('/walkers/search_walker', (req, res) => {
	res.status(200).render('walker/search_walker');
})

app.use(function (req, res) {
	res.status(404);
	res.render('404');
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(port, () => {
	console.log("Server is running on port:" + app.get('port'));
})
