import express from 'express'

import { verifyToken } from '../middlewares/auth.js'
import { updatePersonalInfo, addProfessionalInfo,  } from '../controllers/user.js'

const router = express.Router()

router
    /* CREATE */
    .post('/professionalInfo/', verifyToken, addProfessionalInfo)

    /* READ */

    /* UPDATE */
    .patch('/personalInfo/', verifyToken, updatePersonalInfo)
    // .patch('/professionalInfo/', verifyToken, updateProfessionalInfo)

    /* DELETE */


export default router