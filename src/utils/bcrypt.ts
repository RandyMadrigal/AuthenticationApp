import bcrypt from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
  const saltRound = 10;
  return await bcrypt.hash(password, saltRound);
};

export const comparePassword = async (
  password: string,
  hashpassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashpassword);
};
