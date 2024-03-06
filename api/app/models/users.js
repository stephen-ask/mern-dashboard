import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

export const userCollection = async() => {
  try {
    await User.createCollection();
  } catch (error) {
    console.log(error);
  }
}

// await User.createCollection();

export default User;

