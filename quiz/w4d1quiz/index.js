const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));

let list = [];
app.get('/', (req, res) => {
    res.render("index", {
        list: list,
    });
});
app.get('/add', (req, res) => {
    res.render("add");
});
app.post('/add', (req, res) => {
    let item = req.body.item;
    if (item) {
        list.push(item);
    }
    res.redirect(303, "/");
});
app.listen(3000);