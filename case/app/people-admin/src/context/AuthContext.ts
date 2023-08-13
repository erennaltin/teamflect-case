import { SignInDTO } from "models/DTO/SignInDTO";
import { User } from "models/User";
import { createContext } from "react";




export type AuthContextType = {
  signIn: ({email, password}: SignInDTO) => Promise<any>;
  signOut: () => void;
  getUser: () => User;
  signUp: (user: User) => Promise<any>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;