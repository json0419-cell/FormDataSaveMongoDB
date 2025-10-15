const express = require('express');
const router = express.Router();
const db = require('../controllers/database');

router.get('/', (req, res) => res.render('index'));
router.post('/saveNewCustomer', db.saveNewCustomer);
router.get('/customers', db.listCustomers);

module.exports = router;
