import mongoose from "mongoose";

const connection = {};
// const URI = "mongodb+srv://caosutang:aDmin157@cluster0.waeul.mongodb.net/todoApp?retryWrites=true&w=majority";

export default async function connectToDatabase() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.mongodburl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  connection.isConnected = db.connections[0].readyState;
}
