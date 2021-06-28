// 환경변수 사용
require('dotenv').config();

const PORT = process.env.PORT || 3000;

// 서버환경 구축
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('server testing');

    return res.send(`testing on server ${PORT}`);
});

const adminRouter = require('./routers/AdminRouter');
app.use('/back-office', adminRouter);

const appRouter = require('./routers/AppRouter');
app.use('/api', appRouter);

app.listen(PORT, () => {
    console.log(`myStory's server listen on port ${PORT}`);
})