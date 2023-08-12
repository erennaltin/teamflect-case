import styles from './app.module.scss';
type Props = {}

const Home = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1>Welcome!</h1>
      <p>It is front-end part of Teamflect case. You can switch between routes and see my work.</p>
      <p>Made by Eren Altın for Teamflect</p>
    </div>
  )
}

export default Home