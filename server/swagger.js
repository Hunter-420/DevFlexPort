import swaggerAutogen from 'swagger-autogen'

const swagger = swaggerAutogen()

const doc = {
    info: {
        title: 'COREQ API DOCUMENTATION',
        description: 'API Documentation',
    },
    host: 'http://localhost:3000',
}

const outputFile = './swagger-output.json'
const routes = [
    './routes/auth.js',
]

swagger(outputFile, routes, doc)