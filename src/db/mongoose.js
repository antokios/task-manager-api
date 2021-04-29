const mongoose = require('mongoose');
const chalk = require('chalk')

const connectDB = function () {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then((res) => {
        console.log(`${chalk.green.bold('Connection established')}. Database: ${chalk.green(`${res.connection.name}`)} Host: ${chalk.green(`${res.connection.host}`)} Port: ${chalk.green(`${res.connection.port}`)}`)
    }).catch((e) => {
        console.log('Unable to connect to Database', e)
    })
}

module.exports = connectDB