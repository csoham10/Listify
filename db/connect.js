const mongoose = require('mongoose')


//mongodb+srv://soham:<password>@meinprojekts.u77y3eh.mongodb.net/


const connectDB = (url)=>{
    mongoose.set("strictQuery", false);
    return mongoose
        .connect(url//,{
            //     useNewUrlParser: true,
            //     useCreateIndex: true,
            //     useFindAndModify: false,
            //     useUnifiedTopology: true,
            // })
        )
}


module.exports = connectDB