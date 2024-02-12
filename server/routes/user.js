import express from 'express'
import rateLimit from 'express-rate-limit'

import { verifyToken } from '../middlewares/auth.js'
import { updateUser } from '../controllers/user.js'

const router = express.Router()

router
    /* CREATE */

    /* READ */

    /* UPDATE */
    .put('/:userId', verifyToken, updateUser)

    /* DELETE */


export default router