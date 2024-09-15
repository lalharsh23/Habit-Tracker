const express = require("express");
const router = express.Router();
const Habit = require("../models/habit");
const moment = require("moment");

// Helper function to get the last 7 days' status
function getLast7DaysStatus(habit) {
    const last7Days = [];
    if (!habit.status) {
        habit.status = [];
    }
    for (let i = 0; i < 7; i++) {
        const date = moment().subtract(i, "days").startOf("day").toDate();
        const statusObj = habit.status.find((s) => s && moment(s.date).isSame(date, "day")) || {
            date,
            status: "None",
        };
        last7Days.push(statusObj);
    }
    return last7Days.reverse(); // To display from oldest to newest
}

router.get("/", async (req, res) => {
    try {
        const habits = await Habit.find({});
        habits.forEach((habit) => {
            habit.last7DaysStatus = getLast7DaysStatus(habit);
        });
        res.render("index", { habits, moment });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

router.post("/add", async (req, res) => {
    try {
        const habit = new Habit({ name: req.body.name });
        await habit.save();
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

router.post("/update", async (req, res) => {
    try {
        const { id, date, status } = req.body;
        const habit = await Habit.findById(id);
        if (!habit.status) {
            habit.status = [];
        }
        const statusDate = moment(date).startOf("day").toDate();
        const existingStatus = habit.status.find(
            (s) => s && moment(s.date).isSame(statusDate, "day")
        );
        if (existingStatus) {
            existingStatus.status = status;
        } else {
            habit.status.push({ date: statusDate, status });
        }
        await habit.save();
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
