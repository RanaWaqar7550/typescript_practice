import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import 'reflect-metadata';

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
    this.routes();
  }
  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static('src/Pages'));
  }

  private routes(): void {
    this.app.get('/', (req: IRequest, res: IResponse): void => {
      res.end('working');
    });
    [
      UserController
    ].forEach(controller => {
      // This is our instantiated class
      const instance = new controller();
      // The prefix saved to our controller
      const prefix = Reflect.getMetadata('prefix', controller);
      // Our `routes` array containing all our routes for this controller
      const routes: Array<RouteDefinition> = Reflect.getMetadata('routes', controller);
      if (routes && routes.length) {
        // Iterate over all routes and register them to our express application 
        routes.forEach(route => {
          // It would be a good idea at this point to substitute the `app[route.requestMethod]` with a `switch/case` statement
          // since we can't be sure about the availability of methods on our `app` object. But for the sake of simplicity
          // this should be enough for now.
          this.app[route.requestMethod](prefix + route.path, (req: express.Request, res: express.Response) => {
            // Execute our method for this path and pass our express request and response object.
            instance[route.methodName](req, res);
          });
        });
      }
    });
  }
}
export default new App().app;
