import bcryptjs from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
  const saltRound = 10;
  return await bcryptjs.hash(password, saltRound);
};

export const comparePassword = async (
  password: string,
  hashpassword: string
): Promise<boolean> => {
  return await bcryptjs.compare(password, hashpassword);
};
