const express = require('express')
const app = express()
const port = 3000
let contacts = [];



app.set('view engine', 'ejs');
app.use(express.static(__dirname + "public"));
var bodyParser = require('body-parser');

app.get('/', (req, res) => {
    res.render('./index.html');


})

app.get('/heartbeat', (req, res) => {
    res.json({
        "is": "working"
    })
})

app.get('/contacts', (req, res) => {
    res.render("contacts")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



