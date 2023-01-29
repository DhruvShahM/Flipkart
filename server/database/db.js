import mongoose from "mongoose";

export const Connection = async (URL) => {

    try {
        let data = await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database');
    }
}

export default Connection;