const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = new Schema({
    questionName: { type: String, maxLength: 255 },
    answer: { type: Object },
    rightAnswer: { type: String },
    like: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    categoreId: { type: String }
});

module.exports = mongoose.model('Question', Question);