import styles from './app.module.scss'
import { DefaultButton, Image } from '@fluentui/react'
import RegisterForm from 'components/Form/RegisterForm';
import AuthContext from 'context/AuthContext';
import useWindowDimensions from 'helpers/hooks/useWindowDimensions';
import Logo from 'images/logo.svg'
import { useContext, useEffect } from 'react';
import RootRouter from 'routes/index';

const Register = () => {
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
      <h3>Register</h3>
    </div>
    <div className={styles.container} style={{flexDirection: width < 1062 ? 'column' : 'row'}}>
      <RegisterForm />
      <div className={styles.subContainer} style={{marginTop: width < 1062 ? '24px' : '0'}}>
        <h3>Do you already have an account?</h3>
        <DefaultButton text='Login' className={styles.button} onClick={() => RootRouter.navigate('/login')}/>
      </div>
      <Image src={Logo} alt='Logo' className={styles.logo}/>
    </div>
    </>
  )
}

export default Register