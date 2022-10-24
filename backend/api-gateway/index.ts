import express from 'express';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

const app = express();
const port = 3007;

const {
    HOLIDAY_API_URL,
    PRODUCTS_API_URL,
  } = require('./urls');
  
  const optionsProducts = {
    target: PRODUCTS_API_URL,
    changeOrigin: true, 
    logger: console,
  };
  
  const optionsHoliday = {
    target: HOLIDAY_API_URL,
    changeOrigin: true, 
    logger: console,
  };
  
  const productsProxy = createProxyMiddleware(optionsProducts);
  const holidayProxy = createProxyMiddleware(optionsHoliday);
  
  app.get('/', (req, res) => res.send('Hello Gateway API'));
  app.get('/holiday', holidayProxy);
  //app.get('/products', productsProxy);
  
  app.listen(port, () => console.log(`Api Gateway app listening on port ${port}!`));
