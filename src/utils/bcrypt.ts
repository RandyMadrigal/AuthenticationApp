import bcrypt from "bcryptjs";

export const hashPassword = async (password: string) => {
  const pass = await bcrypt.hash(password, 10);
  return pass;
};

export const comparePassword = async (password: string) => {};
