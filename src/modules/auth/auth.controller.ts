import { NextFunction, Request, Response } from 'express';
import User from '../../models/user';
import argon from 'argon2';
import env from '../../common/setEnv';
import jwt from 'jsonwebtoken';

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ error: 'User already exists' });
      return;
    }

    const hashedPassword = await argon.hash(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const isMatch = await argon.verify(user.password, password);
    if (!isMatch) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    // generate access token
    const accessToken = jwt.sign(
      { _id: user._id, email: user.email },
      env.JWT_SECRET,
      { expiresIn: '1h' },
    );

    res.status(200).json({ accessToken });
  } catch (error) {
    next(error);
  }
};
