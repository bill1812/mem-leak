var express = require('express');
var bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());

let api = express.Router();

api.post('/test', (req, res) => {
  let data = req.body.data;
  res.end('Okay ...');
});

app.use(api);
app.listen(8964, () => console.log('Server started API at port 8964'));
