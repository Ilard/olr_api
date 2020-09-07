const express = require('express'),
      app = express(),
      cors = require('cors'),
      bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT,
      router = express.Router();

let data = {
  "status": false,
  "players": [],
  "lastGame": [],
  "waitingList": []
};

const playerLogin = (name) => {
  let list = false;

  if (data.players.length < 2) {
    data.players.push(name);
    list = 'players';
  } else {
    data.waitingList.push(name);
    list = 'waitingList';
  }
  
  return list;
}

router.get('/game/status', (req, res) => {
  res.json(data.status);   
});

router.get('/game/players', (req, res) => {
  res.json(data.players);
});

router.get('/game/list', (req, res) => {
  res.json(data.waitingList);
});

router.get('/game/login/:name', (req, res) => {
  const name = req.params.name,
        list = playerLogin(name);

  res.json({list:list});  
  console.log('Move player "' + name + '" in the list "' + list + '"');
});

router.get('/game/player/:player/command/run', function(req, res) {
  res.json(req.params);
});

app.use('/', router);
app.listen(port);
console.log('Listening on port ' + port);
