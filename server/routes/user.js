import express from 'express'
import rateLimit from 'express-rate-limit'

import { verifyToken } from '../middlewares/auth.js'
import { getUserDetails, updatePersonalInfo, updateUser, deleteUser } from '../controllers/user.js'

const router = express.Router()

router
    /* CREATE */

    /* READ */
    .get('/:userId', rateLimit({ windowMs: 60 * 1000, max: 5 }), getUserDetails)

    /* UPDATE */
    .patch('/personalInfo/:userId', verifyToken, rateLimit({ windowMs: 60 * 1000, max: 25 }), updatePersonalInfo)
    .put('/:userId', verifyToken, rateLimit({ windowMs: 60 * 1000, max: 25 }), updateUser)

    /* DELETE */
    .delete('/:userId', verifyToken,  rateLimit({ windowMs: 60 * 1000, max: 25 }), deleteUser)

export default router