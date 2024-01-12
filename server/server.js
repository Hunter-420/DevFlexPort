import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import cors from 'cors';



const server = express();
let PORT = 3000;
server.use(express.json());
server.use(cors());
server.options('*', cors());
mongoose.connect(process.env.DB_LOCATION, {
    autoIndex: true
});


server.get('/', (req, res) => {
    res.send('Hello World')
})

server.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})
