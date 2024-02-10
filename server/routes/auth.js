import express from 'express'
import rateLimit from 'express-rate-limit'

import { verifyToken } from '../middlewares/auth.js'
import { login, updateAuth, deleteUser } from '../controllers/auth.js'

const router = express.Router()

router
    /* CREATE */
    .post('/login', rateLimit({ windowMs: 60 * 1000, max: 5 }), login)

    /* READ */

    /* UPDATE */
    .patch('/update', verifyToken, rateLimit({ windowMs: 60 * 1000, max: 5 }), updateAuth)

    /* DELETE */
    .delete('/', verifyToken,  rateLimit({ windowMs: 60 * 1000, max: 5 }), deleteUser)

export default router