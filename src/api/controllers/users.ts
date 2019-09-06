import { IRequest, IResponse, INextFunction } from '../../interfaces';
import userValidation from '../validations/user';
import { JsonController, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore } from "routing-controllers";
import validate from 'express-validation';
import UserModel from '../model/user';
/**
 * @name UserController class
 */
@JsonController('/api')
export default class UsersController {
    private userModel;
    constructor() {
        this.userModel = new UserModel();
    }
    @Post("/users")
    @UseBefore(validate(userValidation.registerFields))
    async saveUserData(@Req() req: IRequest, @Res() res: IResponse, next: INextFunction): Promise<any> {
        try {
            const { password, confirmPassword }: any = req.body;
            if (password !== confirmPassword) {
                return next({
                    status: 400,
                    message: "confirm password does not matched."
                });
            }
            const result = await this.userModel.saveUserData(req.body);
            return res.json(result.ops);
        } catch (error) {
            next({
                message: 'some error'
            })
        }

    }
    @Get("/users")
    async getAllUsers(@Req() req: IRequest, @Res() res: IResponse, next: INextFunction): Promise<any> {
        try {
            const result: Array<object> = await this.userModel.getUsersData();
            return res.json(result);
        } catch (error) {
            console.log(error)
            next({
                message: 'some error'
            })
        }

    }

    @Put("/users")
    async updateUserData(@Req() req: IRequest, @Res() res: IResponse, next: INextFunction): Promise<any> {
        try {
            const { username, update } = req.body;
            const result: object = await this.userModel.updateUserData(username, { $set: update });
            return res.json(result);
        } catch (error) {
            console.log(error)
            next({
                message: 'some error'
            })
        }

    }

    @Delete("/users")
    async deleteUserData(@Req() req: IRequest, @Res() res: IResponse, next: INextFunction): Promise<any> {
        try {
            const { username } = req.body;
            const result: object = await this.userModel.removeUserData(username);
            return res.json(result);
        } catch (error) {
            console.log(error)
            next({
                message: 'some error'
            })
        }
    }
}