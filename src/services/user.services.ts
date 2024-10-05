import * as userRepository from "../repository/user.repository";
import { IUSER } from "../utils/interface";

export const getAllUser = async () => {
  return await userRepository.findUsers();
};

export const getUserById = async (id: string) => {
  return await userRepository.findUserById(id);
};

export const createUser = async (userData: IUSER) => {
  return await userRepository.insertUser(userData);
};

export const deleteUser = async (id: string) => {
  return await userRepository.deleteUser(id);
};
