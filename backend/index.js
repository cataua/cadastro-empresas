import express from 'express';
import bodyParser from 'body-parser';
import dotEnv from 'dotenv';
import { api } from './routes/index.js';

const app = express();

app.set('port', 5050);
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
app.use(api);

app.listen(app.get('port'), () => {
    console.info('Listenin at port 5050');
})