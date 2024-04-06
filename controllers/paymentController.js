const Payment = require('../models/payment');

const paymentController = {
    paymentSuccessful: async (req, res) => {
        const expiryDate = req.body.expiryDate;
        // Split the expiryDate string into month and year
        const dateParts = expiryDate.split('-');
        const month = dateParts[1]; // Extract the month Format - YYYY-MM
        const year = dateParts[0]; // Extract the year Format - YYYY-MM

        const monthYear = `${month} - ${year}`;
        
        const payment = new Payment({
            price: req.body.price,
            email: req.body.email,
            cardNumber: req.body.cardNumber,
            expiryDate: monthYear,
            cvv: req.body.cvv,
            deliveryAddress: req.body.deliveryAddress
        });
    
        try {
            await payment.save();
            res.redirect('/payment_successful');
        } catch (err) {
            console.error('Error saving payment:', err);
            res.redirect('/payment');
        }
    }
};

module.exports = paymentController;