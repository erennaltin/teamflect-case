import styles from './app.module.scss'
import LoginForm from '../../../components/Form/LoginForm'
import { DefaultButton, Image } from '@fluentui/react'
import Logo from '../../../assets/images/logo.svg'
import RootRouter from '../..'
import useWindowDimensions from '../../../helpers/hooks/useWindowDimensions'

const Login = () => {
  const { width } = useWindowDimensions();

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