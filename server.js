// init project
const express = require('express');
const app = express();
const feeds = require('./lib/fake-feeds')
const feed = require('./lib/fake-feed')

var port = process.env.PORT || 8000

app.use(express.static('public'));

app.get('/api/feeds', function(request, response) {
  feeds(request, response)
});

app.get('/api/feeds/:id', function(request, response) {
  feed(request, response)
});

// listen for requests :)
const listener = app.listen(port, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
