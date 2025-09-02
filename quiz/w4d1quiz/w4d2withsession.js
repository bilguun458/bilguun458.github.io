const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "Secret Billy",
}));

app.get('/', (req, res) => {
    res.render("index", {
        list: req.session.list || [],
    });
});
app.get('/add', (req, res) => {
    res.render("add");
});
app.post('/add', (req, res) => {
    let item = req.body.item;
    let list = req.session.list;
    if (item) {
        if (!list) {
            list = [];
        }
        list.push(item);
    }
    req.session.list = list;
    res.redirect(303, "/");
});
app.listen(3000);