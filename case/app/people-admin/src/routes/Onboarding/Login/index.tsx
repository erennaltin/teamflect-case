import styles from './app.module.scss'
import { DefaultButton, Image } from '@fluentui/react'
import LoginForm from 'components/Form/LoginForm';
import AuthContext from 'context/AuthContext';
import useWindowDimensions from 'helpers/hooks/useWindowDimensions';
import Logo from 'images/logo.svg'
import { useContext, useEffect } from 'react';
import RootRouter from 'routes/index';

const Login = () => {
  const { width } = useWindowDimensions();
  const context = useContext(AuthContext);
  const user = context?.getUser();

  useEffect(() => {
    if (user !== null) {
      RootRouter.navigate('/')
    }
  },[])

  return (
    <>
    <div className={styles.container}>
      <h3>LOGIN</h3>
    </div>
    <div className={styles.container} style={{flexDirection: width < 1062 ? 'column' : 'row'}}>
      <LoginForm />
      <div className={styles.subContainer} style={{marginTop: width < 1062 ? '24px' : '0'}}>
        <h3>Don't you have an account yet?</h3>
        <DefaultButton text='Sign Up' className={styles.button} onClick={() => RootRouter.navigate('/register')} />
      </div>
      <Image src={Logo} alt='Logo' className={styles.logo}/>
    </div>
    </>
  )
}

export default Login