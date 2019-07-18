import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import 'reflect-metadata';
import path from 'path';
import { useExpressServer } from "routing-controllers";

import { IRequest, IResponse, IApplication, RouteDefinition } from '../interfaces';
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
    this.config();
    this.pingRoutes();
  }
  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static('src/Pages'));
    useExpressServer(this.app, {
      controllers: [UserController]
  })
  }

  private pingRoutes(): void {
    this.app.get('/', (req: IRequest, res: IResponse): void => {
      console.log('coming here')
      res.end('working');
    });
  }
}
export default new App().app;
