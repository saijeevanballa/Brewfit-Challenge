import mongoose from 'mongoose';
const DB_URL = process.env.DB_URL;

mongoose.connect(
    DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => console.log('DB Connection Successfully !'))
    .catch((err) => console.error(err));