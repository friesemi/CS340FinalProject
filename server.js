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
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.set('mysql', mysql);
app.set('port', port);


app.get('/', (req, res) => {
	res.status(200).render('index');
})

app.get('/index', (req, res) => {
	res.status(200).render('index');
})

app.get('/owners', (req, res) => {
	res.status(200).render(__dirname + 'owner/owners');
})

app.get('/dog_meet', (req, res) => {
	res.status(200).render('meet/dog_meet');
})

app.get('/create_meet', (req, res) => {
	res.status(200).render('meet/create_meet');
})

app.get('/delete_meet', (req, res) => {
	res.status(200).render('meet/delete_meet');
})

app.get('/search_meet', (req, res) => {
	res.status(200).render('meet/search_meet');
})

app.get('/update_meet', (req, res) => {
	res.status(200).render('meet/update_meet');
})

app.get('/add_meet', (req, res) => {
	res.status(200).render('meet/add_meet');
})

app.get('/walkers', (req, res) => {
	res.status(200).render('walker/walkers');
})

app.get('/create_owner', (req, res) => {
	res.status(200).render('owner/create_owner');
})

app.get('/search_owner', (req, res) => {
	res.status(200).render('owner/search_owner');
})

app.get('/update_owner', (req, res) => {
	res.status(200).render('owner/update_owner');
})

app.get('/add_dog', (req, res) => {
	res.status(200).render('dog/add_dog');
})

app.get('/delete_owner', (req, res) => {
	res.status(200).render('owner/delete_owner');
})

app.get('/list_breeders', (req, res) => {
	res.status(200).render('breeder/list_breeders');
})

app.get('/create_breeder', (req, res) => {
	res.status(200).render('breeder/create_breeder');
})

app.get('/delete_breeder', (req, res) => {
	res.status(200).render('breeder/delete_breeder');
})

app.get('/search_for_breeder', (req, res) => {
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

app.get('/delete_dog', (req, res) => {
	res.status(200).render('dog/delete_dog');
})

app.get('/search_dog', (req, res) => {
	res.status(200).render('dog/search_dog');
})

app.get('/update_dog', (req, res) => {
	res.status(200).render('dog/update_dog');
})

app.get('/create_walker', (req, res) => {
	res.status(200).render(__dirname + 'walker/create_walker');
})

app.get('/update_walker', (req, res) => {
	res.status(200).render(__dirname + 'walker/update_walker');
})

app.get('/add_walker', (req, res) => {
	res.status(200).render(__dirname + 'walker/add_walker');
})

app.get('/delete_walker', (req, res) => {
	res.status(200).render(__dirname + 'walker/delete_walker');
})

app.get('/search_walker', (req, res) => {
	res.status(200).render(__dirname + 'walker/search_walker');
})

app.listen(port, () => {
	console.log("Server is running on port:" + app.get('port'));
})
