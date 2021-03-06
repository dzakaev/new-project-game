const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(require('./routes/index'));

async function start () {
    try {
        await mongoose.connect('mongodb+srv://Baisangur:q1w2e3r4@cluster0.nnwrv.mongodb.net/GamesDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(3005, () => {
            console.log('Server has been...')
        })
    }catch (e) {
        console.log(e)
    }
}
start()



