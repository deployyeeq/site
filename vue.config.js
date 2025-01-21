const path = require('path');

module.exports = {
  devServer: {
    before: function (app) {
      // Маршрут для main.html
      app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/main.html'));
      });

      // Маршрут для second.html
      app.get('/partners', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/partners.html'));
      });
      app.get('/car-info', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/car-info.html'));
      });
    },
  },
};