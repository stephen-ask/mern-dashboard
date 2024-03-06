import jwt from 'jsonwebtoken';
import { Router } from 'express';
import { createUser, getAllUsers, hashPassword, checkUser, comparePassword } from '../app/controller/user.controller.js';
import { compare } from 'bcrypt';

const route = Router();

route.get("/", (req, res) => res.send("Server is up and running"));

route.post("/login", async (req, res) => {
  let resObject = {};
  let data = {
    username: req.body.username
  };
  
  // check the user if user already in db. 
  let userExists = await checkUser(data);
  if(userExists != null ) {
    var checkPassword = await comparePassword(req.body.password, userExists.password)
  }

  if( checkPassword != null && checkPassword ) {
      var token = jwt.sign(req.body, process.env.SECRET_KEY);
      resObject = { msg: "success", token: token };
  } else {
    resObject = { status: 403, msg: "Unauthorised"};
  }
  
  res.json(resObject);
});

route.post("/register", async (req, res) => {
  let userData = {
    username: req.body.username,
    password: await hashPassword(req.body.password),
    phone: req.body.phone,
  }

  let response = await createUser(userData);
  
  res.json({ status: 'success', message: 'Registration successful', data: response});
});

route.get("/users", async (req, res) => {
  let response = await getAllUsers();

  res.json({ status: 'success', data: response});
});

route.get("/users/:id", async (req, res) => {
  let response = await getAllUsers();

  res.json({ status: 'success', data: response});
});

export default route;