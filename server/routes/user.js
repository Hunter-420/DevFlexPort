import express from 'express'
import rateLimit from 'express-rate-limit'

import { verifyToken } from '../middlewares/auth.js'
import { updatePersonalInfo } from '../controllers/user.js'

const router = express.Router()

router
    /* CREATE */

    /* READ */

    /* UPDATE */
    .patch('/personalInfo/', verifyToken, rateLimit({ windowMs: 60 * 1000, max: 25 }), updatePersonalInfo)

    /* DELETE */


export default router