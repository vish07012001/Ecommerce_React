import mongoose from "mongoose";

const connectDb = async () => {
  const URL = process.env.MONGODB_URI || process.env.MONGO_URI;
  try {
    if (!URL) {
      throw new Error(
        "MongoDB connection string is not defined in environment variables"
      );
    }
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    console.error("Full error:", error);
    throw error; // Re-throw to be handled by express error handler
  }
};

export default connectDb;
