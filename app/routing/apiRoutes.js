module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.send('GET friends');
  });

  app.post('/api/friends', function(req, res) {
    res.send('POST friend');
  });
};
