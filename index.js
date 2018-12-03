const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, {useNewUrlParser : 'true'}, (error,res) =>
{
  if(error)
  {
      console.log('Could not connect to DB: ',error);
  }
  else
  {
      //console.log('res0',res)
      console.log(config.secret);
      console.log('Successfully connected to ' + config.db + ' database');
  }
});

app.use(express.static(__dirname + '/client/dist/client'));

app.get('*', (req, res) =>
{
  res.sendFile(path.join(__dirname + '/client/dist/client'));
});

app.listen(8080, () =>
{
  console.log('Listening on Port 8080...');
});
