// user.controller.js
import User from '../models/users.js';
import { bcrypt } from '../../globalImports.js';

async function hashPassword (password) {
  const saltRounds = 10;

  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function(err, hash) {
      if (err) reject(err)
      resolve(hash)
    });
  })

  return hashedPassword
}

// compare password
export async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}


// Create a new user
const createUser = async (userData) => {
  try {
    const savedUser = await User.create(userData);
    return savedUser;
  } catch (error) {
    return error;
  }
};

const checkUser = async (userData) => {
// FETCH THE USER FROM THE DB 
  const user = await User.findOne(userData);
  console.log(user);  
  
  // RETURN THE USER IF FOUND
  if(user) {  
    return user;
  }

  // RETURN NULL IF NOT FOUND
  return null;
}

// Get all users
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error('Error getting users');
  }
};

// Get user by ID
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error('Error getting user');
  }
};

// Update user by ID
const updateUserById = async (userId, userData) => {
  try {
    const user = await User.findByIdAndUpdate(userId, userData, { new: true });
    return user;
  } catch (error) {
    throw new Error('Error updating user');
  }
};

// Delete user by ID
const deleteUserById = async (userId) => {
  try {
    await User.findByIdAndDelete(userId);
  } catch (error) {
    throw new Error('Error deleting user');
  }
};

export { createUser, getAllUsers, getUserById, updateUserById, deleteUserById, hashPassword, checkUser };
