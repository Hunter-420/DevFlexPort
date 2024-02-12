import express from 'express'
import rateLimit from 'express-rate-limit'
import swaggerUi from 'swagger-ui-express'

import authRouter from './auth.js'
import userRouter from './user.js'
import publicRouter from './public.js'
import swaggerDocument from '../swagger-output.json' assert { type: 'json' }

const router = express.Router()

router
    .use('/auth', rateLimit({ windowMs: 60 * 1000, max: 5 }), authRouter)
    .use('/user', rateLimit({ windowMs: 60 * 1000, max: 30 }), userRouter)
    .use('/public', rateLimit({ windowMs: 60 * 1000, max: 5 }), publicRouter)
    .use('/api-docs', rateLimit({ windowMs: 60 * 1000, max: 5 }), swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    
export default router