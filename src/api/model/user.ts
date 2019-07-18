import { MongoClient } from 'mongodb';
import { db } from '../../config/mongodb';
import { IError } from '../../interfaces';

export default class userModel {
    saveUserData(userData): Promise<any> {
        return new Promise((resolve, reject) => {
            db.collection('user').insertOne(userData, (err: IError, result: object): void => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        })
    }
    getUsersData(userData): Promise<any> {
        return new Promise((resolve, reject) => {
            db.collection('user').find({}).toArray((err: IError, result: object): void => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        })
    }
    updateUserData(username, updatedObject): Promise<any> {
        return new Promise((resolve, reject) => {
            db.collection('user').findAndModify({ username: username }, {}, updatedObject, { new: true }, (err: IError, result: object): void => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    }
    removeUserData(username): Promise<any> {
        return new Promise((resolve, reject) => {
            db.collection('user').remove({ username: username }, (err: IError, result: object): void => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    }
}