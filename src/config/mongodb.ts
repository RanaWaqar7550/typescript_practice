import { MongoClient } from 'mongodb';

import { MONGO_DB_HOST, MONGO_DB_PORT, MONGO_DB_DATABASE} from '../utils/constants';
import { IError } from '../interfaces';
let db : MongoClient;
/**
 * @name MongoDB class
 */
export class MongoDB {
    private url : string;
    connectMongo() : void {
        this.url = `mongodb://${MONGO_DB_HOST}:${MONGO_DB_PORT}/${MONGO_DB_DATABASE}`;
        MongoClient.connect(this.url, (err: IError, database : MongoClient ) : void => {
            if(err) {
                throw new Error('mongodb not connected');
            }
            console.log('Mongodb connected successfully');
            db = database.db();
        });
    }
}

export { db };
