import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const login = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const user = await User.findOne({ $or: [{ 'auth.username': username }, { 'auth.email': email }] })
        
        if (!user) {
            return res.status(404).json({ message: 'Login: Invaild User' })
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.auth.password)
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Login: Invalid password' })
        }
    
        const token = jwt.sign({ id: user.userId, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' })
    
        res.status(200).json({ message: 'Login: Login successful', token, user: { ...user.toObject(), auth: { ...user.auth, password: undefined } } })
    } catch (err) {
        res.status(500).json({ message: 'Login: Server error', error: err })
    }
}   

const signup = async (req, res) => {
    const { username, email, password } = req.body

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Signup: Please fill in all fields' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            auth: {
                email: email,
                username: username, 
                password: hashedPassword,
            },
            personalInfo: {
                name: null,
                address: {
                    addressLine1: null,
                    addressLine2: null,
                    city: null,
                    state: null,
                    zipCode: null,
                    country: null,
                },
                contact: {
                    phone: null,
                    email: null,
                    website: null,
                    github: null,
                    linkedin: null,
                    twitter: null,
                    facebook: null,
                    instagram: null,
                    youtube: null,
                    tiktok: null,
                    snapchat: null,
                    pinterest: null,
                    reddit: null,
                    discord: null,
                    twitch: null,
                    telegram: null,
                    whatsapp: null,
                    signal: null,
                    slack: null,
                    medium: null,
                },
                bio: null,
                skills: null,
                interests: null,
                hobbies: null,
            },
            professionalInfo: {
                education: [],
                experience: [],
                certifications: [],
                awards: [],
                publications: [],
                projects: [],
                languages: [],
            },

        })

        await newUser.save()
        res.status(201).json({ message: 'Signup: User created' })
    } catch(err) {
        if (err.code === 11000) {
            return res.status(409).json({ message: 'Signup: User already exists', error: err })
        }
        res.status(500).json({ message: 'Signup: Server error', error: err })
    }
}

export { login, signup }