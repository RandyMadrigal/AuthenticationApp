import * as userRepository from "../repository/user.repository";

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

export const deleteUser = async (id: string) => {
  try {
    const result = await userRepository.deleteUser(id);
    return result;
  } catch (err) {
    console.log(err);
  }
};
