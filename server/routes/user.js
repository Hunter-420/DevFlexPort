import express from 'express'
import { verifyToken } from '../middlewares/auth.js'
import { getUserDetails, updateUser, deleteUser } from '../controllers/user.js'
import { rateLimiter } from '../middlewares/rateLimiter.js'

const router = express.Router()

router
    /* CREATE */

    /* READ */
    .get('/:userId', rateLimiter, getUserDetails)

    /* UPDATE */
    .put('/:userId', rateLimiter, verifyToken, updateUser)

    /* DELETE */
    .delete('/:userId', rateLimiter, verifyToken, deleteUser)

export default router