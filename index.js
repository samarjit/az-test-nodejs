// create a simple expressjs router with static public dir
import express from 'express';

const app = express();
app.use('/', express.static('public'));
app.get('/hello', (req, res, next) => {
    res.json({hello: 'world'});
});

app.listen(8080, () => {
    console.log('app is running');
})
