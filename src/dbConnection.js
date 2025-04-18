"use strict"
// MongoDB Connection:
const mongoose = require('mongoose');

const dbConnection = async function () {
    try {
        if (!process.env.MONGODB) {
            throw new Error('MONGODB environment variable is not defined');
        }

        await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('* DB Connected *');
    } catch (err) {
        console.error('* DB Not Connected *', err.message);
        process.exit(1); // Terminate the application
    }
};

/* ------------------------------------------------------- */
module.exports = {
    mongoose,
    dbConnection
};