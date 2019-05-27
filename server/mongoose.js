import mongoose from 'mongoose';

export default () => {
  mongoose.connect(`mongodb://${process.env.dbUser}:${process.env.dbPassword}${process.env.dbHost}`, {useNewUrlParser: true});

  return mongoose.connection;
}
