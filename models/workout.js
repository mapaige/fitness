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
			duration: {
				type: Number,
				trim: true,
			},

			distance: {
				type: Number,
				trim: true,
			},
			weight: {
				type: Number,
				trim: true,
				
			},
			sets: {
				type: Number,
				trim: true,
			
			},
			reps: {
				type: Number,
				trim: true,
			
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

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
