import jwt from 'jsonwebtoken'

const verifyToken = async (req, res, next) => {
    try {
        let token = req.header('Authorization')
  
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' })
        }
  
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length).trimLeft()
        }
    
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified

        const { id, username } = verified
        req.id = username
        req.username = username

        next()
        } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Unauthorized: Token has expired' })
        }
    
        console.error('JWT Verification Error:', error)
        return res.status(401).json({ message: 'Unauthorized: Invalid token' })
        }
}
 
export { verifyToken }