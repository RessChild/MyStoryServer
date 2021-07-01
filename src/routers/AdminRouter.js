const express = require('express');
const router = express.Router();

// 계정 확인 ( admin 비밀번호 확인 )
router.post('/identify', (req, res) => {
    console.log('AdminRouter /identify');
    
    const { pw } = req.body;
    const compare = pw === process.env.ADMIN_PASSWORD;

    return res.send('identify');
});

// jwt 추가 인증
router.use('/', (req, res, next) => {
    console.log('JWT Token Identify');

    return next();
});

router.post('/', (req, res) => {
    console.log('AdminRouter /');
    return res.send('testing');
});

module.exports = router;