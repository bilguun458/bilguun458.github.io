const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const isDay = hour > 6 && hour < 18;
    res.render("index", {
        time: date.toTimeString(),
        style: isDay ? "/css/day.css" : "/css/night.css"
    });
});
app.listen(3000);