export interface IUSER {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: string;
}

export interface IAUTH {
  email: string;
  password: string;
}
