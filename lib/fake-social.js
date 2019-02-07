const lorem = require('lorem-ipsum')

function getRandomString () {
  return (Math.random()).toString(36).substr(2);
}

/*
  getRandomDate(new Date(2012, 0, 1), new Date())
*/
function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function createRandomItem (id, sort, req) {
  let obj = {}
  const authors = []
  let count = Math.floor(Math.random() * 6) + 1
  while(count--) {
    authors.push(lorem({count: 2, units: 'words', format: 'plain'}))
  }

  const imgNo = Math.floor(Math.random()* 3) + 1
  obj = {
    id,
    twitter: Math.floor(Math.random()*100000),
    facebook: imgNo + count,
    mendeley: imgNo * Math.floor(Math.random()) + count,
  }

  return obj;
}

module.exports = function (req, res) {
  var params = req.query;

  // how many records to fetch
  var limit = parseInt(params.limit, 10) || 10;

  // pagination offset
  var skip = parseInt(params.skip, 10) || 0;

  // sort field
  var sort = params.sort || 'id';

  res.set('Content-Type','application/json')

  // random delay
  setTimeout(function () {
      let list = []
      list.push(createRandomItem(req.params.id, sort, req))
      res.json({"feed": list});
  }, 100 + Math.floor(Math.random() * 3000));
};
