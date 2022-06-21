'use strict';

const fs = require('fs');

const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('GET OUT OF HERE!');
});

app.post('/',(req,res)=>{
    var data_json={
        date:new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        email:req.body.email
    }
    let data = JSON.stringify(data_json);
    data=data.concat(',')
    fs.appendFileSync('email.txt', data);
    res.send("OK");

});


app.listen(port, () => console.log(`Listening on port ${port}!`))