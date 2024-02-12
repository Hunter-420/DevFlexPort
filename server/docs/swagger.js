import swaggerAutogen from 'swagger-autogen'

const swagger = swaggerAutogen()

const doc = {
    info: {
        title: 'DevFlexPort API Documentation',
        description: 'API Documentation',
    },
    host: 'http://localhost:3000/api',
}

const outputFile = './swagger-output.json'
const routes = [
    '../routes/index.js',
]

swagger(outputFile, routes, doc)