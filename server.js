/*
 * Server side JS controlling page redirect and request queries
 *
 */

var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/src/index.html');
})
  
app.get('/index.html', (req, res) => {
	res.sendFile(__dirname+ '/src/index.html');
})
  
app.get('/owners.html', (req, res) => {
	res.sendFile(__dirname + '/src/owner/owners.html');
})

app.get('/dog_meet.html', (req, res) => {
	res.sendFile(__dirname+ '/src/meet/dog_meet.html');
})

app.get('/walkers.html', (req, res) => {
	res.sendFile(__dirname + '/src/walker/walkers.html');
})

app.get('/create_owner.html', (req, res) => {
	res.sendFile(__dirname + '/src/owner/create_owner.html');
})

app.get('/search_owner.html', (req, res) => {
	res.sendFile(__dirname + '/src/owner/search_owner.html');
})

app.get('/update_owner.html', (req, res) => {
	res.sendFile(__dirname + '/src/owner/update_owner.html');
})

app.get('/add_dog.html', (req, res) => {
	res.sendFile(__dirname + '/src/dog/add_dog.html');
})

app.get('/delete_owner.html', (req, res) => {
	res.sendFile(__dirname + '/src/owner/delete_owner.html');
})

app.get('/create_breeder.html', (req, res) => {
	res.sendFile(__dirname + '/src/breeder/create_breeder.html');
})

app.get('/delete_breeder.html', (req, res) => {
	res.sendFile(__dirname + '/src/breeder/delete_breeder.html');
})

app.get('/list_breeders.html', (req, res) => {
	res.sendFile(__dirname + '/src/breeder/list_breeders.html');
})

app.get('/search_for_breeder.html', (req, res) => {
	res.sendFile(__dirname + '/src/breeder/search_for_breeder.html');
})

app.get('/update_breeder.html', (req, res) => {
	res.sendFile(__dirname + '/src/breeder/update_breeder.html');
})

app.get('/style.css', (req, res) => {
	res.sendFile(__dirname + '/public/css/style.css');
})

app.get('/dogs.html', (req, res) => {
	res.sendFile(__dirname + '/src/dog/dogs.html');
})

app.get('/create_dog.html', (req, res) => {
	res.sendFile(__dirname + '/src/dog/create_dog.html');
})

app.get('/delete_dog.html', (req, res) => {
	res.sendFile(__dirname + '/src/dog/delete_dog.html');
})

app.get('/search_dog.html', (req, res) => {
	res.sendFile(__dirname + '/src/dog/search_dog.html');
})
  
app.get('/update_dog.html', (req, res) => {
	res.sendFile(__dirname + '/src/dog/update_dog.html');
})

app.get('/create_meet.html', (req, res) => {
	res.sendFile(__dirname + '/src/meet/create_meet.html');
})

app.get('/delete_meet.html', (req, res) => {
	res.sendFile(__dirname + '/src/meet/delete_meet.html');
})

app.get('/search_meet.html', (req, res) => {
	res.sendFile(__dirname + '/src/meet/search_meet.html');
})

app.get('/update_meet.html', (req, res) => {
	res.sendFile(__dirname + '/src/meet/update_meet.html');
})

app.get('/add_meet.html', (req, res) => {
	res.sendFile(__dirname + '/src/meet/add_meet.html');
})

app.get('/create_walker.html', (req, res) => {
	res.sendFile(__dirname + '/src/walker/create_walker.html');
})

app.get('/update_walker.html', (req, res) => {
	res.sendFile(__dirname + '/src/walker/update_walker.html');
})

app.get('/add_walker.html', (req, res) => {
	res.sendFile(__dirname + '/src/walker/add_walker.html');
})

app.get('/delete_walker.html', (req, res) => {
	res.sendFile(__dirname + '/src/walker/delete_walker.html');
})

app.get('/search_walker.html', (req, res) => {
	res.sendFile(__dirname + '/src/walker/search_walker.html');
})
  
app.listen(3007, () => {
	console.log("Server is running!");
})