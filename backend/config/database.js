const mongoose = require('mongoose');
mongoose.set('strictQuery', true);  //added to prevent deprecation warning

exports.connectDatabase = ()=>{
    mongoose
    .connect(process.env.MONGO_URI)
    .then((con)=> console.log(`Database connected: ${con.connection.host}`))
    .catch((err)=> console.log(err));
};