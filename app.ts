import http from 'http';

import { app } from './src/config/express';
import Sockets from './src/config/sockets'; 

const server: any = http.createServer(app);
const port: number = 3000;

const socket: any = new Sockets(server);
socket.startEvents();

server.listen(port, (err : any) : void => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
