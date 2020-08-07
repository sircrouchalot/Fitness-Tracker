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

  app.get("/api/workouts/:id", (req, res) => {
    db.Workout.find({_id: req.params.id})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    db.Workout.findOneAndUpdate( {
      _id: req.params.id
    },
    {
      $push: {
        exercises: req.body
      }
    }) 
    .then((dbExercise) => {
      res.json(dbExercise);
    })
    .catch((err) => {
      res.json(err);
     });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({
      day: new Date().setDate(new Date().getDate()),
      exercises: []
    })
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
