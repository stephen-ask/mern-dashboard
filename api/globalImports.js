import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import express from 'express';
import bcrypt from "bcrypt"
import cors from 'cors';
import route from './routes/api.js';
import userRoutes from './routes/user.js';
// import SMTPConnection from "nodemailer/lib/smtp-connection";


export { mongoose, cors, jwt, express, route, userRoutes, bcrypt }