var db = require("../models");

module.exports = function (app) {
  app.get("/api/exercises", (req, res) => {
    db.Exercise.find({})
      .then((dbExercise) => {
        res.json(dbNote);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
