import User from '../models/user.js'

const updateUser = async (req, res) => {
        const { userId } = req.params
  
        try {
          const user = await User.findById(userId).select('-auth')
          if (!user) {
            return res.status(404).json({ message: 'User not found' })
          }
      
          if (req.body.username && req.body.username.trim() !== '') {
            user.username = req.body.username
          }
          // Handle cover picture upload
          if (req.files && req.files['coverPic']) {
            // Assuming you store the file path in req.files['coverPic'][0].path
            user.coverPic = req.files['coverPic'][0].path
          }
      
          // Update full name if available and not empty/whitespace
          if (req.body.fullName && req.body.fullName.trim() !== '') {
            user.fullName = req.body.fullName
          }
      
          // Update bio if available and not empty/whitespace
          if (req.body.bio && req.body.bio.trim() !== '') {
            user.bio = req.body.bio
          }
      
          // Update batch if available and not empty/whitespace
          if (req.body.batch && !isNaN(req.body.batch)) {
            user.batch = Number(req.body.batch)
          }
    
          // Update rollNo if available and not empty/whitespace
          if (req.body.rollNo && !isNaN(req.body.rollNo)) {
            user.rollNo = Number(req.body.rollNo)
          }
    
          // Update location if available and not empty/whitespace
          if (req.body.location && req.body.location.trim() !== '') {
            user.location = req.body.location
          }
    
          // Update faculty if available and not empty/whitespace
          if (req.body.faculty && req.body.faculty.trim() !== '') {
            user.faculty = req.body.faculty
          }
      
          // Update social media links if available
          if (req.body.socialNames) {
            const socialNames = req.body.socialNames
      
            // Update github if available and not empty/whitespace
            if (socialNames.github && socialNames.github.trim() !== '') {
              user.socialNames.github = socialNames.github
            }
      
            // Update linkedin if available and not empty/whitespace
            if (socialNames.linkedin && socialNames.linkedin.trim() !== '') {
              user.socialNames.linkedin = socialNames.linkedin
            }
      
            // Update facebook if available and not empty/whitespace
            if (socialNames.facebook && socialNames.facebook.trim() !== '') {
              user.socialNames.facebook = socialNames.facebook
            }
      
            // Update twitter if available and not empty/whitespace
            if (socialNames.twitter && socialNames.twitter.trim() !== '') {
              user.socialNames.twitter = socialNames.twitter
            }
      
            // Update instagram if available and not empty/whitespace
            if (socialNames.instagram && socialNames.instagram.trim() !== '') {
              user.socialNames.instagram = socialNames.instagram
            }
          }
      
          // Update password if available (verified by old password)
          if (req.body.password && req.body.oldPassword) {
            const isOldPasswordValid = await bcrypt.compare(req.body.oldPassword, user.password)
      
            if (!isOldPasswordValid) {
              return res.status(400).json({ message: 'Invalid old password' })
            }
      
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            user.password = hashedPassword
          }
      
          // Save the updated user
          await user.save()
      
          res.status(200).json({ message: 'Profile updated successfully' })
        } catch (error) {
          res.status(500).json({ message: error.message })
        }
}