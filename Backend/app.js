const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const connectToDb = require('./db/db'); 
const userRoutes = require('./routers/User.routes');
const providerRoutes = require('./routers/Provider.routes');
const authMiddleware = require('./middleware/auth.middleware');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Healthcare Wellness Preventive Care Portal Backend is running');
});
app.use('/users', userRoutes);
app.use('/providers', providerRoutes);

module.exports = app;