import { Schema, model } from 'mongoose'

const educationSchema = new Schema({
    college: {
        type: String,
    },
    university: {
        type: String,
    },
    degree: {
        type: String,
    },
    fieldOfStudy: {
        type: String,
    },
    grade: {
        type: String,
    },
    activities: {
        type: String,
    },
    startDate: {
        type: Date,
        trim: true,
        minlength: 3
    },
    endDate: {
        type: Date,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
    },
})

const experienceSchema = new Schema({
    company: {
        type: String,
    },
    title: {
        type: String,
    },
    location: {
        type: String,
    },
    startDate: {
        type: Date,
        trim: true,
        minlength: 3
    },
    endDate: {
        type: Date,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
    },
})

const certificationSchema = new Schema({
    title: {
        type: String,
    },
    issuingOrganization: {
        type: String,
    },
    issueDate: {
        type: Date,
        trim: true,
        minlength: 3
    },
    expirationDate: {
        type: Date,
        trim: true,
        minlength: 3
    },
    credentialID: {
        type: String,
        trim: true,
    },
    credentialURL: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
    },
})

const awardSchema = new Schema({
    title: {
        type: String,
    },
    issuingOrganization: {
        type: String,
    },
    issueDate: {
        type: Date,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
    },
})

const publicationSchema = new Schema({
    title: {
        type: String,
    },
    publisher: {
        type: String,
    },
    publicationDate: {
        type: Date,
        trim: true,
        minlength: 3
    },
    publicationURL: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
    },
})

const projectSchema = new Schema({
    title: {
        type: String,
    },
    link: {
        type: String,
        trim: true,
    },
    startDate: {
        type: Date,
        trim: true,
        minlength: 3
    },
    endDate: {
        type: Date,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
    },
})

const languageSchema = new Schema({
    name: {
        type: String,
    },
    proficiency: {
        type: String,
    },
})

const skillsSchema = new Schema({
    name: {
        type: String,
    },
    proficiency: {
        type: String,
    },
})

const userSchema = new Schema({
    auth: {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 3
        }
    },
    personalInfo: {
        name: {
            type: String,
            minlength: 3
        },
        address: {
            addressLine1: {
                type: String,
                trim: true,
                minlength: 3
            },
            addressLine2: {
                type: String,
                trim: true,
                minlength: 3
            },
            city: {
                type: String,
                trim: true,
                minlength: 3
            },
            state: {
                type: String,
                trim: true,
                minlength: 3
            },
            zipCode: {
                type: Number,
                trim: true,
                minlength: 3
            },
            country: {
                type: String,
                trim: true,
                minlength: 3
            },
        },
        contact: {
            phone: {
                type: String,
                trim: true,
                minlength: 3
            },
            email: {
                type: String,
                trim: true,
                minlength: 3
            },
            website: {
                type: String,
                trim: true,
                minlength: 3
            },
            github: {
                type: String,
                trim: true,
                minlength: 3
            },
            linkedin: {
                type: String,
                trim: true,
                minlength: 3
            },
            twitter: {
                type: String,
                trim: true,
                minlength: 3
            },
            facebook: {
                type: String,
                trim: true,
                minlength: 3
            },
            instagram: {
                type: String,
                trim: true,
                minlength: 3
            },
            youtube: {
                type: String,
                trim: true,
                minlength: 3
            },
            tiktok: {
                type: String,
                trim: true,
                minlength: 3
            },
            snapchat: {
                type: String,
                trim: true,
                minlength: 3
            },
            pinterest: {
                type: String,
                trim: true,
                minlength: 3
            },
            reddit: {
                type: String,
                trim: true,
                minlength: 3
            },
            discord: {
                type: String,
                trim: true,
                minlength: 3
            },
            twitch: {
                type: String,
                trim: true,
                minlength: 3
            },
            telegram: {
                type: String,
                trim: true,
                minlength: 3
            },
            whatsapp: {
                type: String,
                trim: true,
                minlength: 3
            },
            signal: {
                type: String,
                trim: true,
                minlength: 3
            },
            slack: {
                type: String,
                trim: true,
                minlength: 3
            },
            medium: {
                type: String,
                trim: true,
                minlength: 3
            },
        },
        bio: {
            type: String,
            trim: true,
            minlength: 3
        },
        skills: {
            type: String,
            trim: true,
            minlength: 3
        },
        languages: {
            type: String,
            trim: true,
            minlength: 3
        },
        hobbies: {
            type: String,
            trim: true,
            minlength: 3
        },
    },
    professionalInfo: {
        education: [ educationSchema ],
        experience: [ experienceSchema ],
        certifications: [ certificationSchema ],
        awards: [ awardSchema ],
        publications: [ publicationSchema ],
        projects: [ projectSchema ],
        languages: [ languageSchema ],
        skills: [ skillsSchema ],
    },
},
{
    timestamps: true,
})

const User = model('User', userSchema)
export default User