const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GradeSchema = new Schema({
	player: {
		type: String,
		required: [true, 'Name field is required.']
	},
	grade: {
		type: Number,
		required: [true, 'Body field is required.']
    }
})

const Grade = mongoose.model('grade', GradeSchema)
module.exports = Grade
