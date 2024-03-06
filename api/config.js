import { config } from 'dotenv'; 
config();

// Database Initialization. 
const apiUrl = process.env.MANGO_DB_URI;
const dbName = process.env.MANGO_DB_NAME;
const PORT = process.env.PORT || 5000;

const jwtSecret = process.env.JWT_SECRET;

// SMTP Configuration
// let smtpConnection = new SMTPConnection({
//   host: "smtp.freesmtpservers.com",
//   port: 25,
//   auth: "None"
// });



export { jwtSecret, apiUrl, PORT, dbName };