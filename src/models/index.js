import mongoose from 'mongoose';

import User from './user';
import Message from './message';

const connectDb = () => {
  return mongoose.connect('mongodb://admin:informatica@3.15.24.100:27017/admin');
};

const models = { User, Message };

export { connectDb };

export default models;
