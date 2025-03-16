import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const MONGODB_URI = "mongodb+srv://arfajsheru:arfajsheru1234@cluster0.pqla8.mongodb.net";

        await mongoose.connect(`${MONGODB_URI}/person`);
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
    }
};
