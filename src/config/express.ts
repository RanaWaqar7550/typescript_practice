import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { IRequest, IResponse, IApplication } from '../interfaces';

/**
 * @name App class
 * @description Express Application
 */
class App {
  public app : IApplication;
  constructor () {
    // run the express instance and store in app
    this.app = express();
    this.config();
    this.routes();
  }
  private config () : void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static('src/Pages'));
  }

  private routes () : void {
    this.app.get('/', (req : IRequest, res : IResponse) : void => {
      res.end('working');
    });
  }
}
export default new App().app;
