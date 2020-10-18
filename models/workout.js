const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const workoutSchema = new Schema(
	{
		day: {
			type: Date,
			default: new Date().setDate(new Date().getDate()),
		},

		exercises: Array,
	},
	{
		toObject: { virtuals: true },
		toJSON: { virtuals: true },
	}
);

workoutSchema.virtual('totalDuration').get(function () {
	let total = 0;
	for (let i = 0; i < this.exercises.length; i++) {
		total += +this.exercises[i].duration;
		console.log('excercises:  ', this.exercises[i].duration);
	}
	return total;
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
