import express from 'express'
import rateLimit from 'express-rate-limit'

import { verifyToken } from '../middlewares/auth.js'
import { getUserDetails, updateUser } from '../controllers/user.js'

const router = express.Router()

router
    /* CREATE */

    /* READ */
    .get('/:userId', rateLimit({ windowMs: 60 * 1000, max: 5 }), getUserDetails)

    /* UPDATE */
    .put('/:userId', verifyToken, rateLimit({ windowMs: 60 * 1000, max: 25 }), updateUser)

    /* DELETE */


export default router