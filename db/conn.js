const mongoose = require('mongoose');

const DB = process.env.DATABASE_URL;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("DB connected Successfully");
}).catch((err) => console.log(err));


