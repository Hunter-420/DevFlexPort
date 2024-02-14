import express from 'express'
import rateLimit from 'express-rate-limit'
import swaggerUi from 'swagger-ui-express'

import rateLimitPerRequestType from '../middlewares/rateLimit.js'

import authRouter from './auth.js'
import userRouter from './user.js'
import publicRouter from './public.js'
import swaggerDocument from '../docs/swagger-output.json' assert { type: 'json' }

const router = express.Router()

router
    .use('/auth', rateLimitPerRequestType('auth'), authRouter)
    .use('/user', rateLimitPerRequestType('api'), userRouter)
    .use('/public', rateLimitPerRequestType('general'), publicRouter)
    .use('/docs', rateLimitPerRequestType('api'), swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    
export default router