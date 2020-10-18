var router = require('express').Router();
var Workout = require('../models/workout');

// Requesting all workouts

router.get('/api/workouts', function (req, res) {
	Workout.find()
		.then((data) => {
			console.log('All workouts', data);
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.post('/api/workouts', function (req, res) {
	Workout.create(req.body)
		.then((data) => {
			console.log('You have a new workout');
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.get('/api/workouts/range', function (req, res) {
	Workout.find()
		.then((data) => {
			console.log('Got workouts within range');
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

router.put('/api/workouts/:id', function (req, res) {
	console.log('workout has been updated');

	console.log('workoutID');
	Workout.update(
		{ _id: req.params.id },
		{
			$push: { exercises: req.body },
		},
		{ new: true }
	)
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports = router;
