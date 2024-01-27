import express from 'express'
import { verifyToken } from '../middlewares/auth.js'
import { updateUser, deleteUser } from '../controllers/user.js'

const router = express.Router()

router
    /* CREATE */

    /* READ */

    /* UPDATE */
    .put('/:userId', verifyToken, updateUser)

    /* DELETE */
    .delete('/:userId', verifyToken, deleteUser)

export default router