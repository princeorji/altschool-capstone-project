import express from 'express';
import * as controller from './auth.controller';
import validate from '../../common/validate';

const routes = express.Router();

routes.post('/signup', validate('signup'), controller.signup);
routes.post('/login', validate('login'), controller.login);

export default routes;
