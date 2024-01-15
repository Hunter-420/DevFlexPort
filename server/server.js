import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'

/* EXPRESS SERVER */
const server = express()

/* BODY PARSER */
server.use(express.json())

/* CORS */
server.use(cors())
server.options('*', cors())

/* DATABASE CONNECTION */
mongoose.connect(process.env.MONGO_URI, {
    autoIndex: true,
  }).then(() => {
      console.log('Database Connected')
  })
   .catch((err) => {
      console.log(err)
  })

/* ROUTES */
server.get('/', (req, res) => {
  res.status(200).send('Hello World')
}) 

/* SERVER LISTENING */
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log('Server listening on port ' + PORT)
})
