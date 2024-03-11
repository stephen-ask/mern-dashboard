import jwt from 'jsonwebtoken';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.use((req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
});

userRoutes.get("/users", async (req, res) => {
  let response = await getAllUsers();

  res.json({ users: response });
});

userRoutes.get("/users/:id", async (req, res) => {
  let response = await getAllUsers();

  res.json({ data: response });
});
export default userRoutes;