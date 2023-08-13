import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import { SignInDTO } from 'models/DTO/SignInDTO';
import { Login, Register } from 'service/User';
import { User } from 'models/User';
import AuthContext from 'context/AuthContext';
import Layout from './Sharedss/Layout.tsx';

const Root = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {  
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            user: action.user
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            user: null
          };
        case 'SIGN_UP':
          return {
            ...prevState,
            isSignout: false,
            user: action.user
          };
      }
    },
    {
      isSignout: false,
      user: null,
    }, () => {
      const localData = localStorage.getItem('User');
      return localData ? JSON.parse(localData) : { isSignout: false, user: null };
    }
  );

  useEffect(() => {
    localStorage.setItem('User', JSON.stringify(state));
  }, [state])
  
  const signIn = async ({ email, password }: SignInDTO) => {
    const loginResponse = await Login({ email, password });
    if (loginResponse.status === 200)
    {
      dispatch({ type: 'SIGN_IN', token: loginResponse.data.accessToken, user: loginResponse.data.user });
      document.cookie = `userToken=${loginResponse.data.accessToken}`;
      navigate('/');
    }
    return loginResponse;
  }

  const signUp = async (user: User) => {
    const registerResponse = await Register({ email: user.email, password: user.password, firstName: user.firstName, lastName: user.lastName });
    if (registerResponse.status === 201)
    {
      dispatch({ type: 'SIGN_UP', token: registerResponse.data.accessToken, user: registerResponse.data.user });
      document.cookie = `userToken=${registerResponse.data.accessToken}`;
      navigate('/');
    }
    return registerResponse;
  }
  
  const signOut = () => {
    dispatch({ type: 'SIGN_OUT' });
    document.cookie = `userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    navigate('/');
  }
  
  const getUser =  () => {
    return state.user;
  }


  return (
    <AuthContext.Provider value={{signIn, signOut, getUser, signUp }}>
      <Layout>
        <Outlet />
      </Layout>
    </AuthContext.Provider>
  )
}

export default Root;