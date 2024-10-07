import * as userRepository from "../repository/user.repository";
import { IUSER } from "../utils/interface";
import { hashPassword } from "../utils/bcrypt";

//TODO handle errors

export const getAllUser = async () => {
  try {
    return await userRepository.findUsers();
  } catch (err) {
    console.log(err);
  }
};

export const getUserById = async (id: string) => {
  try {
    return await userRepository.findUserById(id);
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (userData: IUSER) => {
  try {
    const { password, ...data } = userData;

    //verify if email already exists
    const user = await userRepository.findByEmail(userData.email);
    if (user) throw new Error("User with email already exists");

    //encryptPassword
    const encryptPassword = await hashPassword(password);

    //create a new user with encryptpassword
    const newUser = { ...data, password: encryptPassword };

    //insert User
    const result = await userRepository.insertUser(newUser);

    return result;
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const result = await userRepository.deleteUser(id);
    return result;
  } catch (err) {
    console.log(err);
  }
};
