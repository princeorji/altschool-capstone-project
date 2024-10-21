import express from 'express';
import authRoutes from './auth/auth.routes';
import userRoutes from './user/user.routes'
import passport from 'passport';

const routes = express.Router();

routes.use('/auth', authRoutes);
routes.use('/users', passport.authenticate('jwt', { session: false }), userRoutes);

export default routes;
