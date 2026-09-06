const express = require('express');
const productRoutes = require('./routes/product.routes');
const apiRateLimiter = require('./middlewares/rateLimiter.middleware');
const notFound = require('./middlewares/notFound.middleware');
const errorHandler = require('./middlewares/errorHandler.middleware');

const app = express();

app.use(express.json());
app.use(apiRateLimiter);

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;