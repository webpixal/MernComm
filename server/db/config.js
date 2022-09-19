const dotenv = require("dotenv");
const mongoose = require('mongoose');


const DB = process.env.DATABASE;

mongoose.connect(DB, {
}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`no connection`));

// mongoose.connect('mongodb+srv://admin:password123456@merncomm.77lfukm.mongodb.net/MernComm?retryWrites=true&w=majority' );