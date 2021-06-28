const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log('AdminRouter /');
    return res.send('testing');
});

module.exports = router;