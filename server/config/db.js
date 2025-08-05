import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL); // Match your .env key
    console.log("✅ MongoDB Connected Successfully!");
  } 
  catch (err) {
    console.error("❌ Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit with failure
  }
};
