const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
	question: {
		type: String,
		required: [true, 'Name field is required.']
	},
	option_a: {
		type: String,
		required: [true, 'Body field is required.']
    },
    option_b: {
		type: String,
		required: [true, 'Body field is required.']
    },
    option_c: {
		type: String,
		required: [true, 'Body field is required.']
    },
    option_d: {
		type: String,
		required: [true, 'Body field is required.']
    },
    answer:{
		type: String,
		required: [true, 'Body field is required.']
    },
    bywhom:{
		type: String,
    }
})

const Question = mongoose.model('question', QuestionSchema)
module.exports = Question
