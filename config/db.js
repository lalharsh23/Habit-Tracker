// config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URI}/HabitTracker`);
        console.log("MongoDB connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
