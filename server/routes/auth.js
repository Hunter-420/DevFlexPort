import express from 'express'
import { login, signup } from '../controllers/auth.js'

const router = express.Router()

router
    /* CREATE */
    .post('/login', login)
    .post('/signup', signup)

    /* READ */

    /* UPDATE */

    /* DELETE */

export default router