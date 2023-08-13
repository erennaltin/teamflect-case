import { createContext } from "react";

export type SignInDTO = {
  email: string,
  password: string
}

export type User = {
  token?: string,
  email?: string,
  password?: string;
  firstName?: string,
  lastName?: string,
}

export type AuthContextType = {
  signIn: ({email, password}: SignInDTO) => Promise<any>;
  signOut: () => void;
  getUser: () => User;
  signUp: (user: User) => Promise<any>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;