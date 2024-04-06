const  mongoose  = require('mongoose');

const paymentSchema = new mongoose.Schema({
    price: Number,
    email: String,
    cardNumber: Number,
    expiryDate: String,
    cvv: Number,
    deliveryAddress: String
});

const Payment = mongoose.model('Payment', paymentSchema, 'Payments');

module.exports = Payment;