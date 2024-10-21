import express from 'express';
import * as controller from './user.controller';

const routes = express.Router();

routes.get('/:userId', controller.profile);

export default routes;
