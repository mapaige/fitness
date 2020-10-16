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
},
	{
		toObject : {virtuals: true},
		toJSON: {virtuals: true},
	}
);

workoutSchema.virtual("totalDuration").get(function (){
	let total = 0;
	for (let i = 0; i < this.exercises.length; i++){
		total += +this.exercises[i].duration;
		console.log("excercises:  ",this.exercises[i].duration);
	}
	return total;
});

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;
