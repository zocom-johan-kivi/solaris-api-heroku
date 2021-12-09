const express = require('express');
const cors = require('cors');
const { keys, bodies } = require('./data');
const PORT = 5000 | process.env.PORT;

const App = express();

App.use(cors());

App.get('/', (req, res) => {
    send('Solaris API by ZoCom. \nEndpoints avaible are /key and /bodies.')
})

App.post('/keys', (req, res) => {
    res.send({ key : keys[Math.floor(Math.random()*keys.length)] })
})

App.get('/bodies', (req, res) => {

    console.log(req.headers)
    if(keys.includes(req.headers['x-zocom'])){
        res.send({ bodies: bodies })
    } else {
        res.status(402).send('No valid key found in request header.')
    }

})

App.listen(PORT, () => {
    console.log('Up n running on port ' +  PORT)
})