import express from 'express';
import morgan from 'morgan';
import './db'

const app = express();
app.use(morgan('dev'));

app.get('/auth', (req, res) =>{
    res.send({message:'welcome'});
})

app.listen(3000, () => console.log(`Auth API listening on port 3000!`));