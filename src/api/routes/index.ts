import express from 'express';

import { IRouter, IRequest, IResponse } from '../../interfaces';
import usersRoute from './users';

const router : IRouter = express.Router();

router
  .route('/')
  /**
   * @api {get} /api default route
   * @apiDescription API PING route
   * @apiName API default
   */
  .get((req : IRequest, res : IResponse ) => res.end('API working'));
 
router.use('/users', usersRoute);

export default router;