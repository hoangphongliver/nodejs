const express = require('express');
const router = express.Router();
const QuestionController = require('../controller/question.controller');

router.get('/', QuestionController.getAllQuestion)
router.get('/:id', QuestionController.findQuestionById)
router.post('/', QuestionController.create)
router.put('/:id', QuestionController.update)
router.delete('/:id', QuestionController.delele)

module.exports = router;