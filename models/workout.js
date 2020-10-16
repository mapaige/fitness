const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const workoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now,
	},
	
	exercises: [
		{
			type: {
				type: String,
				trim: true,
				required: 'Enter an exercise type',
			},
			name: {
				type: String,
				trim: true,
				required: 'Enter an exercise name',
			},
			distance: {
				type: Number,
				required: 'Enter the distance value',
			},
			weight: {
				type: Number,
				trim: true,
				required: 'Enter a weight value',
			},
			sets: {
				type: Number,
				trim: true,
				required: 'Enter sets value',
			},
			reps: {
				type: Number,
				trim: true,
				required: 'Enter reps value',
			},
		},
	],
	
	totalDuration:{
		type: Number,
		trim: true,
		default: 0,
	}
});

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;
