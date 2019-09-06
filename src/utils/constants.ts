import * as dotenv from "dotenv";
/**
 * @description start picking values from .env file
 */
dotenv.config();
/**
 * @description default configurations
 */
export const SERVER_PORT : string = process.env.SERVER_PORT || '3000';
export const MONGO_DB_HOST : string = process.env.MONGO_DB_HOST || 'localhost';
export const MONGO_DB_PORT : string = process.env.MONGO_DB_PORT || '27017';
export const MONGO_DB_DATABASE : string = process.env.MONGO_DB_DATABASE || 'typescript';