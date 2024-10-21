import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  console.error(error);

  // Check if the error is an instance of HttpError
  if (createError.isHttpError(error)) {
    res.status(error.status || 500).json({ error: error.message });
  } else {
    res.status(500).json({ error: 'An unknown error occurred' });
  }
};

export default errorHandler;
