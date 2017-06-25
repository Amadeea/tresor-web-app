import express from 'express';
import userApi from './router/userApi';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({
  limit: '100mb',
  extended: true
}));

app.use(bodyParser.json({
  limit: '100mb'
}));

app.get('/', (req, res) => {
  console.log("home request");
  res.send('Hello World!');
});

app.use(userApi());

app.listen(1337, () => {
  console.log("Server is running");
});