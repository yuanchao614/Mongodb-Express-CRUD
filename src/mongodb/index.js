const mongoose = require('mongoose');

const InitiateMongoServer = async () => {
    // 连接mongodb
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection mongodb error:'));
    db.once('open', () => {
        // we're connected!
        console.log('connection mongodb success');
    });
}

module.exports = InitiateMongoServer