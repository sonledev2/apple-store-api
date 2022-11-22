const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const productRoute = require('./src/routes/product.route');
const modelRoute = require('./src/routes/model.route');
const categoryRoute = require('./src/routes/category.route');

// dotenv.config();
//Connect DB
// const url = process.env.MONGO_URL;
// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function () {
//   console.log('Connected successfully');
// });

app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(morgan('common'));

app.use(
  express.urlencoded({
    extended: true,
  })
);
//ROUTES
app.use('/api', productRoute);
app.use('/api', modelRoute);
app.use('/api', categoryRoute);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Apple-Store API.',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} `);
});
