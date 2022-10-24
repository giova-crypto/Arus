"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const app = (0, express_1.default)();
const port = 3007;
const { HOLIDAY_API_URL, PRODUCTS_API_URL, } = require('./urls');
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
const productsProxy = (0, http_proxy_middleware_1.createProxyMiddleware)(optionsProducts);
const holidayProxy = (0, http_proxy_middleware_1.createProxyMiddleware)(optionsHoliday);
app.get('/', (req, res) => res.send('Hello Gateway API'));
app.get('/holiday', holidayProxy);
//app.get('/products', productsProxy);
app.listen(port, () => console.log(`Api Gateway app listening on port ${port}!`));
