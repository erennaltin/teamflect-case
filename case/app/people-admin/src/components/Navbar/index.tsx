import { DefaultButton, Image } from '@fluentui/react'
import styles from'./app.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import useWindowDimensions from '../../helpers/hooks/useWindowDimensions';
import AuthContext from 'context/AuthContext';
import LOGO from 'images/logo.svg';
import Sidebar from 'components/Sidebar';
import RootRouter from 'routes/index';

const Navbar = () => {
  const { width } = useWindowDimensions();
  
  const context = useContext(AuthContext);
  const user = context?.getUser() ?? null;
  const signOut = context?.signOut ?? (() => {});

  return (
    <div className={styles.container}>
      <Link to='/'>
        <Image src={LOGO} alt='Teamflect logo'  width={150} height={75}/>
      </Link>
      {width < 550 
      ? <Sidebar />
      : (<div className={styles.linkContainer}>
        <Link to="/" className={styles.link}>HOME</Link>
        <Link to="/people" className={styles.link}>PEOPLE</Link>
      </div>)}
      <div style={{flex: 1}} />
      <div>
        {user != null ? <DefaultButton text='Logout' onClick={() => signOut()}/> : <DefaultButton text='Login' onClick={() => RootRouter.navigate('/login')}/> }
      </div>
    </div>
  )
}

export default Navbar;

