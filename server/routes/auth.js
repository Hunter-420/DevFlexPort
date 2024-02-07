import express from 'express'
import rateLimit from 'express-rate-limit'

import { login } from '../controllers/auth.js'

const router = express.Router()

router
    /* CREATE */
    .post('/login', rateLimit({ windowMs: 60 * 1000, max: 5 }), login)

    /* READ */

    /* UPDATE */

    /* DELETE */

export default router