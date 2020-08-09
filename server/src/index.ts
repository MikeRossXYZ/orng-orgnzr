// Importing the dependencies
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import eventRoutes from './routes/event';

// Load the secret/environment variables
dotenv.config();
// TODO: Verify the required env variables are set


// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send(ads);
});

// https://stackoverflow.com/a/55425436/7431886
app.use('/event', eventRoutes);

// starting the server
app.listen(process.env.PORT, () => {
  console.log('listening on port 3000');
});
