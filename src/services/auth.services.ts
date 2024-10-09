import { hashPassword } from "../utils/bcrypt";
import { IUSER } from "../utils/interface";
import { comparePassword } from "../utils/bcrypt";
import * as authRepository from "../repository/auth.repository";

export const createUser = async (userData: IUSER) => {
  try {
    const { password, ...data } = userData;

    //verify if email already exists
    const user = await authRepository.findByEmail(userData.email);
    if (user) throw new Error("User with email already exists");

    //encryptPassword
    const encryptPassword = await hashPassword(password);

    //create a new user with encryptpassword
    const newUser = { ...data, password: encryptPassword };

    //insert User
    const result = await authRepository.insertUser(newUser);

    return result;
  } catch (err) {
    throw err;
  }
};

export const login = async (email: string, password: string) => {
  try {
    //validar email
    const user = await authRepository.findByEmail(email);
    if (!user) throw new Error("invalid email");

    //comparar contraseña
    const isValid = await comparePassword(password, user?.password);
    if (!isValid) throw new Error("incorrect password");

    return user;
  } catch (err) {
    throw err;
  }
};
