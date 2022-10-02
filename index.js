require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

// GET /places



  
  

app.get('*', (req, res) => {
  res.send('404 page')
})

app.listen(process.env.PORT)
