import http from 'http';

import app from './src/config/express';
import Sockets from './src/config/sockets';
import { IError, IMainSocket } from './src/interfaces';

/**
 * @name Main class
 * @description application main point
 */
class Main {
  private server;
  private port : number;
  constructor() {
    this.server = http.createServer(app);
    this.port = 3000;
    this.listenSockets();
    this.listenServer();
  }
  /**
   * @name listenSockets
   * @description class function for listen socket server
   */
  private listenSockets() : void {
    const socket: IMainSocket = new Sockets(this.server);
    socket.startEvents();
  }

  private listenServer() : void {
    this.server.listen(this.port, (err: IError): void => {
      if (err) {
        return console.error(err);
      }
      return console.log(`server is listening on ${this.port}`);
    });

  }
}
/**
 * start APP
 */
new Main();