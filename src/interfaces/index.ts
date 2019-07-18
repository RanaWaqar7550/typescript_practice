import { Request, Response, Application, Router, NextFunction } from 'express';

/**
 * @description Genaric interfaces
 */
export interface IRequest extends Request { }
export interface IResponse extends Response { }
export interface IApplication extends Application { }
export interface IError extends Error { }
export interface IRouter extends Router { }
export interface INextFunction extends NextFunction { }
/**
 * @description typed interfaces
 */
export interface IMainSocket {
    startEvents () : void;
}

export interface IMongoDB {
    connectMongo () : void;
}

export interface RouteDefinition {
    // Path to our route
    path: string;
    // HTTP Request method (get, post, ...)
    requestMethod: 'get' | 'post' | 'delete' | 'options' | 'put';
    // Method name within our class responsible for this route
    methodName: string;
  }