import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
  });

  // Validar el cuerpo de la solicitud con el schema
  const { error } = userSchema.validate(req.body);

  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return;
  }

  next();
};

export default validateUser;
