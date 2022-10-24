import express from 'express';
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
const port = 3007;

const {
    AUTH_API_URL,
    HOLIDAY_API_URL,
    PRODUCTS_API_URL,
  } = require('./urls');
  
  const optionsAuth = {
    target: AUTH_API_URL,
    changeOrigin: true, 
    logger: console,
  };
  
  const optionsHoliday = {
    target: HOLIDAY_API_URL,
    changeOrigin: true, 
    logger: console,
  };
  
  const authProxy = createProxyMiddleware(optionsAuth);
  const holidayProxy = createProxyMiddleware(optionsHoliday);
  
  app.get('/', (req, res) => res.send('Hello Gateway API'));
  app.get('/holiday', holidayProxy);
  app.get('/auth', authProxy);
  
  app.listen(port, () => console.log(`Api Gateway app listening on port ${port}!`));
