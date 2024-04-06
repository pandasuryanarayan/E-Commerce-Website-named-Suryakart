const express = require('express');
const path = require('path');
const router = express.Router();
const userController = require('../controllers/userController');
const paymentController = require('../controllers/paymentController');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/index.html'));
});

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/signup.html'));
});

router.get('/mainportal', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/mainportal.html'));
});

router.get('/grocery', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/grocery.html'));
});

router.get('/electronics', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/electronics.html'));
});

router.get('/fashion', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/fashion.html'));
});

router.get('/mobiles', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/mobiles.html'));
});

router.get('/logout', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/index.html'));
});

router.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/cart.html'));
});

router.get('/payment', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/payment.html'));
});

router.get('/angular', (req, res) => {
    res.sendFile(path.join(__dirname, '/../angular.js'));
});

router.get('/payment_successful', (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/payment_successful.html'));
});

router.post('/signup', userController.signUp);
router.post('/', userController.login);
router.post('/payment_successful', paymentController.paymentSuccessful);

module.exports = router;