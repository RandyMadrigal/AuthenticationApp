import Joi from "joi";
import { Request, Response, NextFunction } from "express";

//pasar schema por parametro al usar el middleware
export const validate = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    next();
  };
};
