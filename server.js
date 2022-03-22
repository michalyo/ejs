const express = require('express')
const mongoose = require('mongoose')
const layouts = require('express-ejs-layouts')
const path = require('path')
const app = express()


const indexRouter = require('./routes/index')
const courseRouter = require('./routes/course')
const purchasedRouter = require('./routes/purchased')


app.listen(8200)
app.use(layouts)
app.set('view engine', 'ejs')
app.use('/style', express.static(path.join(__dirname, 'public', 'style')))

mongoose.connect('mongodb://localhost/ejsTryProject')
.then(()=> console.log('Connected to db'))
.catch(err => console.log(err))

app.use( '/', indexRouter)
app.use( '/course', courseRouter)
app.use( '/purchased', purchasedRouter)

module.exports = app