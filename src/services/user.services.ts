import * as userRepository from "../repository/user.repository";
import { IUSER } from "../utils/interface";
import { hashPassword } from "../utils/bcrypt";

export const getAllUser = async () => {
  return await userRepository.findUsers();
};

export const getUserById = async (id: string) => {
  return await userRepository.findUserById(id);
};

export const createUser = async (userData: IUSER) => {
  const { password } = userData;
  const hash = await hashPassword(password);

  return await userRepository.insertUser(userData, hash);
};

export const deleteUser = async (id: string) => {
  return await userRepository.deleteUser(id);
};
