import { createContext } from "react";
import { SignInDTO } from "../models/DTO/SignInDTO";
import { User } from "../models/User";




export type AuthContextType = {
  signIn: ({email, password}: SignInDTO) => Promise<any>;
  signOut: () => void;
  getUser: () => User;
  signUp: (user: User) => Promise<any>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;