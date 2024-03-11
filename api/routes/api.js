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
      resObject = { status: 201, msg: "success", token: token };
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

route.post("/forgot-password", async (req, res) => {
  let userData = {
    username: req.body.username,
    password: await hashPassword(req.body.password),
    phone: req.body.phone,
  }

  res.json({ status: 'success', message: 'password send to email'});
});

route.post("/reset-password", async (req, res) => {
  let userData = {
    username: req.body.username,
    password: await hashPassword(req.body.password),
    phone: req.body.phone,
  }

  res.json({ status: 'success', message: 'reset password successful'});
});


export default route;