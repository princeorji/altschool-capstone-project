import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import Validators from '../validators/index';

export default function validateRequest(validator: keyof typeof Validators) {
  if (!Validators.hasOwnProperty(validator)) {
    throw new Error(`'${validator}' validator is not exist`);
  }

  return async function (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const schema = Validators[validator];
      const validated = await schema.validateAsync(req.body);
      req.body = validated;
      next();
    } catch (err) {
      if (err instanceof Joi.ValidationError) {
        res.status(422).json({ message: err.message });
        return;
      }
      next(err);
    }
  };
}
