import { User } from "models/User";
import { POST } from "./Client";
import { SignInDTO } from "models/DTO/SignInDTO";

const registerUrl = '/register';
const loginUrl = '/login';

const Register = async (body: User) => {
  return await POST(registerUrl, body);
};

const Login = async (body: SignInDTO) => {
  return await POST(loginUrl, body);
};
export {Register, Login}