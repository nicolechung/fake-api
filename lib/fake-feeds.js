const lorem = require('lorem-ipsum')
const path = require('path')

function getRandomString () {
    return (Math.random()).toString(36).substr(2);
}

/*
  randomDate(new Date(2012, 0, 1), new Date())
*/
function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


function createRandomItem (i, sort) {
    let obj = {}

    obj = {
        id: Math.floor(Math.random()*100000) + '-' + getRandomString(),
        title: lorem({count: 2, units: 'words', format: 'plain'}),
        description: lorem({count: 20, units: 'words', format: 'plain'}),
        journal: lorem({count: 3, units: 'words', format: 'plain'}),
        photo: path.join(__dirname, 'static', 'image.jpg')
    }

    if (sort === 'id') {
      obj.id = i + '-' + getRandomString();
    }
    else if (sort === 'date') {
        obj.date = getRandomDate(new Date(2017, 1, 1), new Date())
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
        var i;
        let list = []
        for (i=0; i<limit; i+=1) {
            list.push(createRandomItem(i+skip, sort))
        }
        res.json({"feeds": list});
    }, 100 + Math.floor(Math.random() * 3000));
};
