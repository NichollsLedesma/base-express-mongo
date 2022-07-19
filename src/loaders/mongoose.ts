import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config';

export default async (): Promise<Db> => {
  const { db: { host, port, name, user, password } } = config
  const credentials = (user && password) ? `${user}:${password}@` : ''
  const connection = await mongoose.connect(`mongodb://${credentials}${host}:${port}/${name}`);
  
  return connection.connection.db
};