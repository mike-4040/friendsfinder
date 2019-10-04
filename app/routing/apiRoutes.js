const path = require('path');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.send('GET friends');
  });

  // If no matching route is found default to home
  app.post('/api/friends', function(req, res) {
    res.sendFile('POST friend');
  });
};
