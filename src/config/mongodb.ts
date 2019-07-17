import { MongoClient } from 'mongodb';

import { MONGO_DB_HOST, MONGO_DB_PORT, MONGO_DB_DATABASE} from '../utils/constants';
import { IError } from '../interfaces';
/**
 * @name MongoDB class
 */
export default class MongoDB {
    private url : string;
    public db : MongoClient;
    constructor() {
        this.url = `mongodb://${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_DATABASE}`;
    }
    connectMongo() : void {
        MongoClient.connect(this.url, (err: IError, database : MongoClient ) : void => {
            if(err) {
                throw new Error('mongodb not connected');
            }
            console.log('Mongodb connected successfully');
            this.db = database;
        });
    }
    getDatabase() : void {
        return this.db;
    }
}