import { IRequest, IResponse, INextFunction } from '../../interfaces';
import Controller from '../decorators/controller';
import Get from '../decorators/route';
/**
 * @name UserController class
 */
@Controller('/api')
export default class UsersController {
    @Get('/hello')
    register(req : IRequest, res : IResponse ,next : INextFunction ) : void {
        res.end('hello')
    }
}