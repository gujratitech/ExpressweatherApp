const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');
const port =process.env.PORT ||  8000;
const hbs = require('hbs');

console.log(path.join(__dirname, "../.."))

const staticPath = app.use(express.static(path.join(__dirname, "../public")))

const templatePath = path.join(__dirname, "templates/views")

const partialsPath = path.join(__dirname, "templates/partials")

app.set('view engine', 'hbs');
app.set('views',templatePath)
hbs.registerPartials(partialsPath);
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/weather', (req, res) => {
    res.render('weather')
})
app.get('*', (req, res) => {
    res.render("404", {
        errMsg:"Oops! Page not found",
    })
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})