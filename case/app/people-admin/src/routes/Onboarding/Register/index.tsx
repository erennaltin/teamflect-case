import styles from './app.module.scss'
import { DefaultButton, Image } from '@fluentui/react'
import Logo from '../../../assets/images/logo.svg'
import RegisterForm from '../../../components/Form/RegisterForm'
import RootRouter from '../..'
import useWindowDimensions from '../../../helpers/hooks/useWindowDimensions'

const Register = () => {
  const { width } = useWindowDimensions();

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