import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: String,
  name: String,
  password: String,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
