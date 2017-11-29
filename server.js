const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, () => {
  console.log(`Bailando La Bamba en ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const reservationsRoutes = require('./routes/reservationRoutes');
app.use('/api/reservations', reservationsRoutes);

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error: err,
    message: err.message,
  });
});