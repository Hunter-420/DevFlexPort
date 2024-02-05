import express from 'express'
import { login } from '../controllers/auth.js'

const router = express.Router()

router
    /* CREATE */
    .post('/login', login)

    /* READ */

    /* UPDATE */

    /* DELETE */

export default router