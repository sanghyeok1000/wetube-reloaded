import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, reequired: true },
  name: { type: String, reequired: true },
  location: String,
});

const User = mongoose.model("user", userSchema);
export default User;
