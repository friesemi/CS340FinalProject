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
	res.sendFile(__dirname + '/views/owner/owners.html');
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
	res.sendFile(__dirname + '/views/walker/walkers.html');
})

app.get('/create_owner', (req, res) => {
	res.sendFile(__dirname + '/views/owner/create_owner.html');
})

app.get('/search_owner', (req, res) => {
	res.sendFile(__dirname + '/views/owner/search_owner.html');
})

app.get('/update_owner', (req, res) => {
	res.sendFile(__dirname + '/views/owner/update_owner.html');
})

app.get('/add_dog', (req, res) => {
	res.sendFile(__dirname + '/views/dog/add_dog.html');
})

app.get('/delete_owner', (req, res) => {
	res.sendFile(__dirname + '/views/owner/delete_owner.html');
})

app.get('/create_breeder', (req, res) => {
	res.sendFile(__dirname + '/views/breeder/create_breeder.html');
})

app.get('/delete_breeder', (req, res) => {
	res.sendFile(__dirname + '/views/breeder/delete_breeder.html');
})

app.get('/list_breeders', (req, res) => {
	res.sendFile(__dirname + '/views/breeder/list_breeders.html');
})

app.get('/search_for_breeder', (req, res) => {
	res.sendFile(__dirname + '/views/breeder/search_for_breeder.html');
})

app.get('/update_breeder', (req, res) => {
	res.sendFile(__dirname + '/views/breeder/update_breeder.html');
})

app.get('/style.css', (req, res) => {
	res.sendFile(__dirname + '/public/css/style.css');
})

app.get('/dogs', (req, res) => {
	res.sendFile(__dirname + '/views/dog/dogs.html');
})

app.get('/create_dog', (req, res) => {
	res.sendFile(__dirname + '/views/dog/create_dog.html');
})

app.get('/delete_dog', (req, res) => {
	res.sendFile(__dirname + '/views/dog/delete_dog.html');
})

app.get('/search_dog', (req, res) => {
	res.sendFile(__dirname + '/views/dog/search_dog.html');
})

app.get('/update_dog', (req, res) => {
	res.sendFile(__dirname + '/views/dog/update_dog.html');
})



app.get('/create_walker', (req, res) => {
	res.sendFile(__dirname + '/views/walker/create_walker.html');
})

app.get('/update_walker', (req, res) => {
	res.sendFile(__dirname + '/views/walker/update_walker.html');
})

app.get('/add_walker', (req, res) => {
	res.sendFile(__dirname + '/views/walker/add_walker.html');
})

app.get('/delete_walker', (req, res) => {
	res.sendFile(__dirname + '/views/walker/delete_walker.html');
})

app.get('/search_walker', (req, res) => {
	res.sendFile(__dirname + '/views/walker/search_walker.html');
})

app.listen(port, () => {
	console.log("Server is running on port:" + app.get('port'));
})
