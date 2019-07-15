import express from 'express';
import cors from 'cors';

/**
 * Express instance
 * @public
 */
const app : any = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(express.static('src/Pages'));

app.get('/', (req : any, res : any) : void => {
  res.end('Working');
});

app.get('/ping', (req : any, res : any) : void => {
  res.send('pong');
});

export { app };
