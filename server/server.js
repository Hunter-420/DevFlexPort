import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'

import { rateLimiter } from './middlewares/rateLimiter.js'
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'

import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger-output.json' assert { type: 'json' }

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

/* RATE LIMITER */
server.use(rateLimiter)

/* ROUTES */
server.use('/auth', authRouter)
server.use('/user', userRouter)
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

/* SERVER LISTENING */
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log('Server listening on port ' + PORT)
})
