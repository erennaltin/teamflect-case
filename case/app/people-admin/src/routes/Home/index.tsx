import { useLocation } from 'react-router-dom';
import styles from './app.module.scss';
import { useContext, useEffect } from 'react';
import AuthContext from 'context/AuthContext';
import RootRouter from '..';

const Home = () => {
  const { state } = useLocation();
  const context = useContext(AuthContext);
  const signOut = context?.signOut ?? (() => {});

  useEffect(() => {
    if (state?.isSignout)
    {
      signOut();
      RootRouter.navigate('/login');
    }
  }, [])

  return (
    <div className={styles.container}>
      <h1>Welcome!</h1>
      <p>It is front-end part of Teamflect case. You can switch between routes and see my work.</p>
      <p>Made by Eren Altın for Teamflect</p>
    </div>
  )
}

export default Home