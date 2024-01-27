import bcrypt from 'bcrypt'
import User from '../models/User.js'

const updateUser = async (req, res) => {
    const { userId } = req.params
    const { auth, personalInfo, professionalInfo } = req.body
  
    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
      
        if (auth) {
            const { email, username, oldPassword, newPassword } = auth
            if (email && email.trim() !== '') {
                user.auth.email = email
            }
            if (username && username.trim() !== '') {
                user.auth.username = username
            }
            const isOldPasswordValid = await bcrypt.compare(oldPassword, user.auth.password)
            if (!isOldPasswordValid) {
                return res.status(400).json({ message: 'Invalid old password' })
            }
            const hashedPassword = await bcrypt.hash(newPassword, 10)
            user.auth.password = hashedPassword
        }

        if (personalInfo) {
            const { name, address, contact, bio, interests, hobbies } = personalInfo
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
            if (interests && interests.trim() !== '') {
                user.personalInfo.interests = interests
            }
            if (hobbies && hobbies.trim() !== '') {
                user.personalInfo.hobbies = hobbies
            }
        }

        if (professionalInfo) {
            const { education, experience, certifications, awards, publications, projects, languages, skills } = professionalInfo
        
            if (education && education.length > 0) {
                user.professionalInfo.education = education.map(edu => ({
                    college: edu.college,
                    university: edu.university,
                    degree: edu.degree,
                    fieldOfStudy: edu.fieldOfStudy,
                    grade: edu.grade,
                    activities: edu.activities,
                    startDate: edu.startDate,
                    endDate: edu.endDate,
                    description: edu.description,
                }))
            }
            if (experience && experience.length > 0) {
                user.professionalInfo.experience = experience.map(exp => ({
                    company: exp.company,
                    title: exp.title,
                    location: exp.location,
                    startDate: exp.startDate,
                    endDate: exp.endDate,
                    description: exp.description,
                }))
            }
            if (certifications && certifications.length > 0) {
                user.professionalInfo.certifications = certifications.map(cert => ({
                    name: cert.name,
                    issuingOrganization: cert.issuingOrganization,
                    issueDate: cert.issueDate,
                    expirationDate: cert.expirationDate,
                    credentialID: cert.credentialID,
                    credentialURL: cert.credentialURL,
                    description: cert.description,
                }))
            }
            if (awards && awards.length > 0) {
                user.professionalInfo.awards = awards.map(award => ({
                    title: award.title,
                    issuingOrganization: award.issuingOrganization,
                    issueDate: award.issueDate,
                    description: award.description,
                }))
            }
            if (publications && publications.length > 0) {
                user.professionalInfo.publications = publications.map(pub => ({
                    title: pub.title,
                    publisher: pub.publisher,
                    publicationDate: pub.publicationDate,
                    publicationURL: pub.publicationURL,
                    description: pub.description,
                }))
            }
            if (projects && projects.length > 0) {
                user.professionalInfo.projects = projects.map(proj => ({
                    name: proj.name,
                    link: proj.link,
                    startDate: proj.startDate,
                    endDate: proj.endDate,
                    description: proj.description,
                }))
            }
            if (languages && languages.length > 0) {
                user.professionalInfo.languages = languages.map(lang => ({
                    name: lang.name,
                    proficiency: lang.proficiency,
                }))
            }
            if (skills && skills.length > 0) {
                user.professionalInfo.skills = skills.map(skill => ({
                    name: skill.name,
                    proficiency: skill.proficiency,
                }))
            }
        }
        
        await user.save()
        res.status(200).json({ message: 'User Profile updated successfully' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteUser = async (req, res) => {
    const { userId } = req.params

    try {
        await User.findByIdAndDelete(userId)
        res.status(200).json({ message: 'User deleted successfully' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export {
    updateUser,
    deleteUser,
}