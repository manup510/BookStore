import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import bookRoute from "./route/book.route.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4001;  // Ensure the port is correct

const URI = process.env.MongoDBURI;

// connect to mongodb
try{
    mongoose.connect(URI,{
        useNewParser: true,
        UseUnifiedTopology: true
    });
   
    console.log("Connected to mongoDB");
} catch(error){
    console.log("Error",error);

}

// defining routes
app.use("/book",bookRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})