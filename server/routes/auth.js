import express from 'express'

import { verifyToken } from '../middlewares/auth.js'
import { login, updateAuth, deleteUser } from '../controllers/auth.js'

const router = express.Router()

router
    /* CREATE */
    .post('/login', login)

    /* READ */

    /* UPDATE */
    .patch('/update', verifyToken, updateAuth)

    /* DELETE */
    .delete('/', verifyToken, deleteUser)

export default router