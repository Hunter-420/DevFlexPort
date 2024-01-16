import User from '../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

exports.login = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const user = await User.findOne({ username })
        if (!user) {
            console.log('Login: Invalid Username or Email')
            return res.status(404).json({ message: 'Login: Invaild User' })
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            console.log('Login: Invalid Password')
            return res.status(401).json({ message: 'Login: Invalid password' })
        }
    
        const token = jwt.sign({ id: user.userId, username: user.username, password: user.password }, process.env.JWT_SECRET, { expiresIn: '1h' })
        console.log('Login: Login successful')
    
        res.status(200).json({ message: 'Login: Login successful', token, userId: user._id })
    } catch (error) {
        res.status(500).json({ message: 'Login: Server error' })
    }

}