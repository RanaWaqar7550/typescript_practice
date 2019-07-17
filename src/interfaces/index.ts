import { Request, Response, Application, Router } from 'express';

/**
 * @description Genaric interfaces
 */
export interface IRequest extends Request { }
export interface IResponse extends Response { }
export interface IApplication extends Application { }
export interface IError extends Error { }
export interface IRouter extends Router { }
/**
 * @description typed interfaces
 */
export interface IMainSocket {
    startEvents () : void;
}
