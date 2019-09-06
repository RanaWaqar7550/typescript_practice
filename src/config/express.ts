import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import 'reflect-metadata';
import path from 'path';
import { useExpressServer, createExpressServer } from "routing-controllers";

import { IRequest, IResponse, IApplication, IError } from '../interfaces';
import error from '../api/middlewares/error';
import UserController from '../api/controllers/users';

/**
 * @name App class
 * @description Express Application
 */
class App {
  public app: IApplication;
  constructor() {
    // run the express instance and store in app
    this.app = express();
    this.pingRoutes();
    this.config();
  }
  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static('src/Pages'));
    useExpressServer(this.app, {
      controllers: [path.join(__dirname, '../api/controllers/**/*.ts')],
      defaultErrorHandler: false
    });
    this.app.use(error);
  }

  private pingRoutes(): void {
    this.app.get('/', (req: IRequest, res: IResponse): void => {
      console.log('coming here')
      res.end('working');
    });
  }
}
export default new App().app;
