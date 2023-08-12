import { Image } from '@fluentui/react'
import LOGO from '../../assets/images/logo.svg';
import styles from'./app.module.scss';
import { Link } from 'react-router-dom';

type Props = {}


const Navbar = (props: Props) => {
  return (
    <div className={styles.container}>
      <Link to='/'>
        <Image src={LOGO} alt='Teamflect logo'  width={150} height={75}/>
      </Link>
      <div className={styles.linkContainer}>
        <Link to="/" className={styles.link}>HOME</Link>
        <Link to="/people" className={styles.link}>PEOPLE</Link>
      </div>
    </div>
  )
}

export default Navbar;

