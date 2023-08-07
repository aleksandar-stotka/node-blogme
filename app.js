const express = require("express")

const morgan = require('morgan')

const mongoose = require("mongoose")

const app = express()
const dbURI = "mongodb+srv://stotka123:stotka1234@cluster0.ip2tn9i.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbURI)
.then((result) => console.log("connect to database") )
.catch((err) => console.log(err))

app.set('view engine', 'ejs')

app.listen(3000)
// midleware $ static files
app.use(express.static('public'))

app.use(morgan('dev'));

app.get('/', (req,res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', {title: ' Home',blogs})
})
app.get('/about', (req,res) => {
    res.render('about',{title: 'About'})
})

app.get('/blogs/create', (req,res) => {
    res.render('create',{title: 'Create'})
})


app.use((req,res) => {
    res.status(404).render('404')
})

