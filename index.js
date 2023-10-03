const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

app.use(cors())
app.use(express.json())

const userRouter = require('./routes/router')
const roomRouter = require('./routes/router')
const { dbUrl } = require('./config/dbConfig')

app.use('/', userRouter)
app.use('/room', roomRouter)

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT 

app.listen(PORT, ()=>console.log('App running port ' + PORT))