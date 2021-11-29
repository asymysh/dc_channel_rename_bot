const app = require('express')();
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Ayo you must be Jo cuz Jo sevrer up and running'));

module.exports = () => {
  app.listen(port);
}