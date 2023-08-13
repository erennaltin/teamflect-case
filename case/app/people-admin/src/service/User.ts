import { SignInDTO, User } from "../context/AuthContext";
import { POST } from "./Client";

const registerUrl = '/register';
const loginUrl = '/login';

const Register = async (body: User) => {
  return await POST(registerUrl, body);
};

const Login = async (body: SignInDTO) => {
  return await POST(loginUrl, body);
};
export {Register, Login}