import { IRequest, IResponse, INextFunction } from '../../interfaces';
import userValidation from '../validations/user';
import {Controller, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore} from "routing-controllers";
import validate from 'express-validation';
/**
 * @name UserController class
 */
@Controller('/api')
@UseBefore(validate(userValidation.registerFields))
export default class UsersController {
    @Post("/users")
    register(@Req() request: IRequest, @Res() res: IResponse, next : INextFunction) : void {
       return res.end('hello');
    }
}