const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my-ecommerce-db');
//mongoose.connect('mongodb+srv://surya:ecommerce@atlascluster.gbv8gql.mongodb.net/my-ecommerce-db');
//Connection Events
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB disconnected');
});

//Close the Mongoose connection if the Node process ends
process.on('SIGINT', ()=> {
    mongoose.connection.close().then(() => {
        console.log('MongoDB connection closed due to application termination');
        process.exit(0);
    }).catch((err) => {
        console.error('Error closing MongoDB connection:', err);
        process.exit(1);
    });
});

module.exports = mongoose;