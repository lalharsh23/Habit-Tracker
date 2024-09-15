const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    status: { type: String, enum: ["None", "Done", "Not Done"], default: "None" },
});

const habitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: [statusSchema],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Habit", habitSchema);
