import { DefaultButton, Image } from '@fluentui/react'
import LOGO from '../../assets/images/logo.svg';
import styles from'./app.module.scss';
import { Link, Navigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import AuthContext, { User } from '../../context/AuthContext';
import RootRouter from '../../routes';
import useWindowDimensions from '../../helpers/hooks/useWindowDimensions';
import Sidebar from '../Sidebar';

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

