import express from 'express'
import { getUserDetails } from '../controllers/user.js'

const router = express.Router()

/* READ */
router
    .get('/:userId', getUserDetails)

export default router