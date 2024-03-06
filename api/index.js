import { PORT } from './config.js';
import { db, express } from './bootstrap.mjs';
import {cors, userRoutes, route} from './globalImports.js';

const app = express();

app.use(express.json());
app.use(cors("*"));

// Apply the auth middleware to the routes that require authentication
app.use('/api/user', userRoutes);
app.use('/api/admin', userRoutes);

// REGISTER ROUTES
app.use('/api/', route);

db().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
})
.catch((error) => {
  console.error('Error connecting to the database:', error);
  process.exit(1);
});


