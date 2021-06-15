import mongoose from 'mongoose';

const connectDB = async ()  => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true
    });
   
  }
  return mongoose.connection; 
  
};

export default connectDB;