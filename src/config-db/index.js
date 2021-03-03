
const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/answers_db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect Successfuly !!');
    } catch (error) {
        console.log('Connect Failure !!');
    }

}

module.exports = {
    connect
}