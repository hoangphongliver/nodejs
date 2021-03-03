const questionModel = require('../models/QuestionModel')

class QuestionController {

    async getAllQuestion(req, res, next) {
        const { pageNumber = 1, pageSize = 10, sortBy = 'questionName', desc = true } = req.query;

        const obj = {}
        obj[sortBy] = desc ? -1 : 1

        try {
            const allQuestion = await questionModel.find();
            const questions = await questionModel.find().sort(obj)
                .limit(pageSize * 1)
                .skip((pageNumber - 1) * pageSize)
                .exec();

            if (questions) {
                const questionsRes = {
                    totalItem: allQuestion.length,
                    page: Number(pageNumber),
                    pageSize: Number(pageSize),
                    results: questions,
                }
                res.json(questionsRes)
            }
        } catch (error) {
            next(error)
        }
    }

    findQuestionById(req, res, next) {
        questionModel.findById({ _id: req.params.id }).then(queston => {
            res.json(queston)
        }).catch(err => next(err))
    }

    create(req, res) {
        const question = new questionModel(req.body);
        question.save().then(() => {
            const status = {
                message: 'Create question successfully !!',
                status: 'success'
            }
            res.json(status)
        }).catch(err => {
            const status = {
                message: 'Create question failure !!',
                status: 'fail',
                err: err
            }
            res.json(status)
        });
    }

    update(req, res) {
        const { id } = req.params
        if (id) {
            questionModel.updateOne({ _id: id }, req.body).then(() => {
                const status = {
                    message: 'Update question successfully !!',
                    status: 'success'
                }
                res.json(status)
            }).catch(err => {
                const status = {
                    message: 'Update question failure !!',
                    status: 'fail',
                    err: err
                }
                res.json(status)
            });

        } else {
            const status = {
                message: 'Record not found !!',
                status: 'fail'
            }
            res.status(400).json(status)
        }
    }

    delele(req, res) {
        const { id } = req.params;
        if (id) {
            questionModel.deleteOne({ _id: id }).then(() => {
                const status = {
                    message: 'Delete question successfully !!',
                    status: 'success'
                }
                res.json(status)
            }).catch(err => {
                const status = {
                    message: 'Delete question failure !!',
                    status: 'fail',
                    err: err
                }
                res.json(status)
            });

        } else {
            const status = {
                message: 'Record not found !!',
                status: 'fail'
            }
            res.status(400).json(status)
        }
    }
}


module.exports = new QuestionController;