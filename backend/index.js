import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { api } from './routes/index.js';

const app = express();

app.set('port', 5050);
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(cors({
        origin: process.env.ORIGIN.split(' '),
        optionsSuccessStatus: 200,
        exposedHeaders: ['Content-Disposition'],
    }
));
app.use(bodyParser.json());
app.use(api);

app.listen(app.get('port'), () => {
    console.info('Listenin at port 5050');
})