users = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.send('GET friends');
  });

  app.post('/api/friends', function(req, res) {
    console.log(users);

    res.json(JSON.stringify(closestMatch(req.body, users)));
  });
};

function closestMatch(user, users) {
  let closest = {};
  let smallestDiff = Infinity;
  users.forEach(storedUser => {
    let diff = 0;
    for (let i in storedUser.scores) diff += Math.abs(storedUser.scores[i] - user.scores[i]);

    if (diff < smallestDiff) {
      smallestDiff = diff;
      closest = { name: storedUser.name, photo: storedUser.photo };
    }
  });
  return closest;
}
