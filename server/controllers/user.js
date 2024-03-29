import User from '../models/User.js'

const getUserDetails = async (req, res) => {
    const { userId } = req.params

    try {
        const user = await User.findById(userId) 
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        
        res.status(200).json({  user: { ...user.toObject(), auth: { ...user.auth, password: undefined } }  })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updatePersonalInfo = async (req, res) => {
    const { personalInfo } = req.body

    try {
        const user = await User.findById(req.id).select('personalInfo')
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
      
        if (personalInfo) {
            const { name, address, contact, bio, skills, hobbies } = personalInfo
            if (name && name.trim() !== '') {
                user.personalInfo.name = name
            }
            if (address) {
                const { addressLine1, addressLine2, city, state, zipCode, country } = address
                if (addressLine1 && addressLine1.trim() !== '') {
                    user.personalInfo.address.addressLine1 = addressLine1
                }
                if (addressLine2 && addressLine2.trim() !== '') {
                    user.personalInfo.address.addressLine2 = addressLine2
                }
                if (city && city.trim() !== '') {
                    user.personalInfo.address.city = city
                }
                if (state && state.trim() !== '') {
                    user.personalInfo.address.state = state
                }
                if (zipCode && zipCode.trim() !== '') {
                    user.personalInfo.address.zipCode = zipCode
                }
                if (country && country.trim() !== '') {
                    user.personalInfo.address.country = country
                }
            }
            if (contact) {
                const { phone, email, website, github, linkedin, twitter, facebook, instagram, youtube, tiktok, snapchat, pinterest, reddit, discord, twitch, telegram, whatsapp, signal, slack, medium } = contact
                if (phone && phone.trim() !== '') {
                    user.personalInfo.contact.phone = phone
                }
                if (email && email.trim() !== '') {
                    user.personalInfo.contact.email = email
                }
                if (website && website.trim() !== '') {
                    user.personalInfo.contact.website = website
                }
                if (github && github.trim() !== '') {
                    user.personalInfo.contact.github = github
                }
                if (linkedin && linkedin.trim() !== '') {
                    user.personalInfo.contact.linkedin = linkedin
                }
                if (twitter && twitter.trim() !== '') {
                    user.personalInfo.contact.twitter = twitter
                }
                if (facebook && facebook.trim() !== '') {
                    user.personalInfo.contact.facebook = facebook
                }
                if (instagram && instagram.trim() !== '') {
                    user.personalInfo.contact.instagram = instagram
                }
                if (youtube && youtube.trim() !== '') {
                    user.personalInfo.contact.youtube = youtube
                }
                if (tiktok && tiktok.trim() !== '') {
                    user.personalInfo.contact.tiktok = tiktok
                }
                if (snapchat && snapchat.trim() !== '') {
                    user.personalInfo.contact.snapchat = snapchat
                }
                if (pinterest && pinterest.trim() !== '') {
                    user.personalInfo.contact.pinterest = pinterest
                }
                if (reddit && reddit.trim() !== '') {
                    user.personalInfo.contact.reddit = reddit
                }
                if (discord && discord.trim() !== '') {
                    user.personalInfo.contact.discord = discord
                }
                if (twitch && twitch.trim() !== '') {
                    user.personalInfo.contact.twitch = twitch
                }
                if (telegram && telegram.trim() !== '') {
                    user.personalInfo.contact.telegram = telegram
                }
                if (whatsapp && whatsapp.trim() !== '') {
                    user.personalInfo.contact.whatsapp = whatsapp
                }
                if (signal && signal.trim() !== '') {
                    user.personalInfo.contact.signal = signal
                }
                if (slack && slack.trim() !== '') {
                    user.personalInfo.contact.slack = slack
                }
                if (medium && medium.trim() !== '') {
                    user.personalInfo.contact.medium = medium
                }
            }
            if (bio && bio.trim() !== '') {
                user.personalInfo.bio = bio
            }
            if (skills && skills.trim() !== '') {
                user.personalInfo.skills = skills
            }
            if (hobbies && hobbies.trim() !== '') {
                user.personalInfo.hobbies = hobbies
            }
        }

        await user.save()

        res.status(200).json({ message: 'User Personal Info updated successfully', user: { ...user.toObject()} })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const addProfessionalInfo = async (req, res) => {
    const { field, data } = req.body

    try {
        const user = await User.findById(req.id).select('professionalInfo')
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        if (field && data) {
            user.professionalInfo[field].push(data)

            await user.save()
            return res.status(200).json({ message: 'User Professional Info updated successfully', user: { ...user.toObject()} })
        }

        return res.status(400).json({ message: 'Field and data are required' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateProfessionalInfo = async (req, res) => {
    const { field, subDocumentId, newData } = req.body

    try {
        const user = await User.findById(req.id).select('professionalInfo')
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        if (field && subDocumentId && newData) {
            const subDocument = user.professionalInfo[field].find(subDoc => subDoc._id.toString() === subDocumentId.toString())
            if (subDocument) {
                subDocument.set(newData)
                await user.save()
                return res.status(200).json({ message: 'User Professional Info updated successfully', user: { ...user.toObject()} })
            }
            return res.status(404).json({ message: 'Sub Document not found' })
        }

        return res.status(400).json({ message: 'Field, subDocumentId and newData are required' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteProfessionalInfo = async (req, res) => {
    const { field, subDocumentId } = req.body
    
    try {
        const user = await User.findById(req.id).select('professionalInfo')
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        if (!field || !subDocumentId) {
            return res.status(400).json({ message: 'Field and subDocumentId are required' })
        }

        user.professionalInfo[field] = user.professionalInfo[field].filter(subDoc => subDoc._id.toString() !== subDocumentId.toString())

        await user.save()
        res.status(200).json({ message: 'Professional details removed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export {
    getUserDetails,
    updatePersonalInfo,
    addProfessionalInfo,
    updateProfessionalInfo,
    deleteProfessionalInfo,
}