const mongoose = require('mongoose');
const chalk = require('chalk')

const connectDB = async () => {
    return await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

// Connect to MongoDB and handle promise
connectDB()
    .then((res) => {
        console.log(`${chalk.green.bold('Connection established')}. Database: ${chalk.green(`${res.connection.name}`)} Host: ${chalk.green(`${res.connection.host}`)} Port: ${chalk.green(`${res.connection.port}`)}`)
    })
    .catch((e) => {
        console.log(chalk.red('Unable to connect to Database'), e)
    })