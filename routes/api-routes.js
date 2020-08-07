var db = require("../models");

module.exports = function (app) {
  
  // app.get("/api/exercises", (req, res) => {
  //   db.Exercise.find({})
  //     .then((dbExercise) => {
  //       res.json(dbExercise);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/exercises/:id", (req, res) => {
    db.Workout.insert({})
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
