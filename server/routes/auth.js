import express from 'express'
import { login } from '../controllers/auth.js'
import { rateLimiter } from '../middlewares/rateLimiter.js'

const router = express.Router()

router
    /* CREATE */
    .post('/login', rateLimiter, login)

    /* READ */

    /* UPDATE */

    /* DELETE */

export default router