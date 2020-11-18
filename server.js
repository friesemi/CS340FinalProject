/*
 * Server side JS controlling page redirect and request queries
 *
 */

var express = require('express');
var path = require('path');
var mysql = require('./dbcon.js');
var app = express();
var port = 3008;
app.use(express.static(path.join(__dirname, 'public')));
app.set('mysql', mysql);
app.set('port', port);

//app.use('/', require('./src/index.js'));
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/src/index.html');
})

app.get('/index', (req, res) => {
	res.sendFile(__dirname+ '/src/index.html');
})

//app.use('/owners', require('./src/owner/owners.js'));
app.get('/owners', (req, res) => {
	res.sendFile(__dirname + '/src/owner/owners.html');
})

app.get('/dog_meet', (req, res) => {
	res.sendFile(__dirname+ '/src/meet/dog_meet.html');
})

app.get('/walkers', (req, res) => {
	res.sendFile(__dirname + '/src/walker/walkers.html');
})

app.get('/create_owner', (req, res) => {
	res.sendFile(__dirname + '/src/owner/create_owner.html');
})

app.get('/search_owner', (req, res) => {
	res.sendFile(__dirname + '/src/owner/search_owner.html');
})

app.get('/update_owner', (req, res) => {
	res.sendFile(__dirname + '/src/owner/update_owner.html');
})

app.get('/add_dog', (req, res) => {
	res.sendFile(__dirname + '/src/dog/add_dog.html');
})

app.get('/delete_owner', (req, res) => {
	res.sendFile(__dirname + '/src/owner/delete_owner.html');
})

app.get('/create_breeder', (req, res) => {
	res.sendFile(__dirname + '/src/breeder/create_breeder.html');
})

app.get('/delete_breeder', (req, res) => {
	res.sendFile(__dirname + '/src/breeder/delete_breeder.html');
})

app.get('/list_breeders', (req, res) => {
	res.sendFile(__dirname + '/src/breeder/list_breeders.html');
})

app.get('/search_for_breeder', (req, res) => {
	res.sendFile(__dirname + '/src/breeder/search_for_breeder.html');
})

app.get('/update_breeder', (req, res) => {
	res.sendFile(__dirname + '/src/breeder/update_breeder.html');
})

app.get('/style.css', (req, res) => {
	res.sendFile(__dirname + '/public/css/style.css');
})

app.get('/dogs', (req, res) => {
	res.sendFile(__dirname + '/src/dog/dogs.html');
})

app.get('/create_dog', (req, res) => {
	res.sendFile(__dirname + '/src/dog/create_dog.html');
})

app.get('/delete_dog', (req, res) => {
	res.sendFile(__dirname + '/src/dog/delete_dog.html');
})

app.get('/search_dog', (req, res) => {
	res.sendFile(__dirname + '/src/dog/search_dog.html');
})

app.get('/update_dog', (req, res) => {
	res.sendFile(__dirname + '/src/dog/update_dog.html');
})

app.get('/create_meet', (req, res) => {
	res.sendFile(__dirname + '/src/meet/create_meet.html');
})

app.get('/delete_meet', (req, res) => {
	res.sendFile(__dirname + '/src/meet/delete_meet.html');
})

app.get('/search_meet', (req, res) => {
	res.sendFile(__dirname + '/src/meet/search_meet.html');
})

app.get('/update_meet', (req, res) => {
	res.sendFile(__dirname + '/src/meet/update_meet.html');
})

app.get('/add_meet', (req, res) => {
	res.sendFile(__dirname + '/src/meet/add_meet.html');
})

app.get('/create_walker', (req, res) => {
	res.sendFile(__dirname + '/src/walker/create_walker.html');
})

app.get('/update_walker', (req, res) => {
	res.sendFile(__dirname + '/src/walker/update_walker.html');
})

app.get('/add_walker', (req, res) => {
	res.sendFile(__dirname + '/src/walker/add_walker.html');
})

app.get('/delete_walker', (req, res) => {
	res.sendFile(__dirname + '/src/walker/delete_walker.html');
})

app.get('/search_walker', (req, res) => {
	res.sendFile(__dirname + '/src/walker/search_walker.html');
})

app.listen(port, () => {
	console.log("Server is running on port:" + app.get('port'));
})
