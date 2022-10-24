import mongoose from "mongoose";

mongoose.connect('mongodb://mongo:27017/arustest')
    .then(db => console.log('DB is connected in port 27017.'))
    .catch(error => console.log(error))

