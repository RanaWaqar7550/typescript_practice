import http from 'http';

import app from './src/config/express';
import Sockets from './src/config/sockets';
import { IError, IMainSocket, IMongoDB } from './src/interfaces';
import { SERVER_PORT } from './src/utils/constants';
import MongoDB from './src/config/mongodb';
import 'reflect-metadata';

/**
 * @name Main class
 * @description application main point
 */
class Main {
  private server;
  private port : string;
  constructor() {
    this.server = http.createServer(app);
    this.port = SERVER_PORT;
    this.listenSockets();
    this.listenServer();
    this.databaseConnect();
  }
  /**
   * @name listenSockets
   * @description class function for listen socket server
   */
  private listenSockets() : void {
    const socket: IMainSocket = new Sockets(this.server);
    socket.startEvents();
  }

  private databaseConnect() : void {
    const mongo : IMongoDB = new MongoDB();
    mongo.connectMongo();
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