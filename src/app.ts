import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import routes from './modules/index';
import './config/passport';
import errorHandler from './common/errorHandler';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(passport.initialize());

app.use('/api/v1', routes);

app.use(errorHandler);

export default app;
